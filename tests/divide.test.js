const request = require("supertest");
const app = require("../src/app");

describe("GET /health", () => {
  it("should return status ok", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("ok");
  });
});

describe("GET /api/divide", () => {
  it("should divide two positive numbers", async () => {
    const res = await request(app).get("/api/divide?a=10&b=2");
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(5);
  });

  it("should handle decimal results", async () => {
    const res = await request(app).get("/api/divide?a=7&b=2");
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(3.5);
  });

  it("should divide negative numbers", async () => {
    const res = await request(app).get("/api/divide?a=-10&b=2");
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(-5);
  });

  it("should return 400 when parameters are missing", async () => {
    const res = await request(app).get("/api/divide?a=10");
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBeDefined();
  });

  it("should return 400 for non-numeric input", async () => {
    const res = await request(app).get("/api/divide?a=abc&b=2");
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBeDefined();
  });

  it("should return 400 when dividing by zero", async () => {
    const res = await request(app).get("/api/divide?a=10&b=0");
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Division by zero is not allowed.");
  });
});
