const Spiderman = require('./../app/spiderman')
  describe ("Unit Test para el proyecto de spiderverse", () => {
      test('Creando un objeto de tipo spiderman', () => {
        const tobey = new Spiderman("Araña humana", 40, "Tobey M", 4, "Sony")
        expect(tobey.name).toBe("Araña humana");
        expect(tobey.age).toBe(40);
        expect(tobey.actor).toBe("Tobey M");
        expect(tobey.movies).toBe(4);
        expect(tobey.studio).toBe("Sony");
      });
  })