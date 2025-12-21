export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !phone || !message) {
      return Response.json(
        { status: "error", message: "Missing required fields" },
        { status: 400 }
      );
    }

    // ---------- RATE LIMIT (Per IP: 4 req / 60 sec) ----------
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();

    global.rateLimitStore = global.rateLimitStore || {};

    if (!global.rateLimitStore[ip]) {
      global.rateLimitStore[ip] = [];
    }

    global.rateLimitStore[ip] = global.rateLimitStore[ip].filter(
      (timestamp) => now - timestamp < 60 * 1000
    );

    if (global.rateLimitStore[ip].length >= 4) {
      return Response.json(
        { status: "error", message: "Too many requests. Try after a minute." },
        { status: 429 }
      );
    }

    global.rateLimitStore[ip].push(now);

    // ---------- FORWARD DATA TO GOOGLE SCRIPT ----------
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("message", message);

    const res = await fetch(process.env.GOOGLE_SCRIPT_ENDPOINT, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    return Response.json(data, { status: 200 });

  } catch (err) {
    console.log("Contact API Error:", err);
    return Response.json(
      { status: "error", message: "Server error" },
      { status: 500 }
    );
  }
}
