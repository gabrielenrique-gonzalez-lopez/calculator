const request = require("supertest");
const app = require("../src/server");

describe("Server Endpoints", () => {
  it("should respond with status code 200 for GET /", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
  });

  it("should respond with status code 404 for GET /nonexistent", async () => {
    const res = await request(app).get("/nonexistent");
    expect(res.statusCode).toEqual(404);
  });
});
