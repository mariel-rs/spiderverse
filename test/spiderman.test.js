const Spiderman = require('./../app/spiderman.js')

describe('Unit Tests for Spiderman class', () => {
  
  test("1) Create Spiderman Object", () => {
    // Create object
    const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")
    // Verify
    expect(andrewGarfield.name).toBe("Spiderman Sony")
    expect(andrewGarfield.age).toBe(31)
    expect(andrewGarfield.actor).toBe("Andrew Garfield")
    expect(andrewGarfield.studio).toBe("Sony")
  })

  test('2) Return name and studio of a Spiderman', () => {
    // Test Andrew Garfield
    const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")
    expect(andrewGarfield.getInfo()).toBe("Hey, I'm Andrew Garfield from Sony")
    // Test Tom Holland
    const tomHolland = new Spiderman("Spiderman Marvel studio", 21, "Tom Holland", 3, "Marvel studio")
    expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio")
  })
})