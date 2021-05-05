/* =================================================================The Collections Component Test======================================================= */
async function withFetch() {
  const res = await fetch();
  const json = await res.json();
  return json;
}

// This is the section where we mock `fetch`
const mockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = () =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          kind: "Movie",
        }),
    });
});

afterAll(() => {
  global.fetch = mockedFetch;
});

describe("Fetch API method", () => {
  it("Returns a promise containing object", async () => {
    const json = await withFetch();
    expect(json).toEqual(
      expect.objectContaining({
        kind: "Movie",
      })
    );
  });
});
