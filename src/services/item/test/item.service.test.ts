import UserService from "../item.service";
import {
  connect,
  clearDatabase,
  closeDatabase,
} from "../../../test-setup/db-config";

//Connect to in-memory db before test
beforeAll(async () => {
  await connect();
});
// Clear all test data after every test.
afterEach(async () => {
  await clearDatabase();
});
// Remove and close the db and server.
afterAll(async () => {
  await closeDatabase();
});

describe("UserService", () => {
  describe("create item", () => {
    it("should create a new user if record already exists", async () => {
      let user = {
        age: 99,
        gender:"female",
        name:"Gloria Boehm",
        address:{
          city:"West Elsiefort",
          state:"Virginia",
          country:"Antarctica (the territory South of 60 deg S)",
          street:"4474 Johnny Freeway"
        },
        email:"Ricky.Hilll0@hotmail.com",
        picture:"http://lorempixel.com/640/480/nature",
        createdAt: new Date(),
      };
      const userService = UserService;

      const data = await userService.saveItem(user);
      // @ts-ignore
      const {__v, _id, address: { _id: addressId } } = data;

      expect(data).toMatchObject({ ...user, __v, _id, address: { ...user.address, _id: addressId } });
    });

    it("should not create a new user if fields is missing", async () => {
      let user = {
        age: 99,
        gender:"female",
        name:"Gloria Boehm",
        address:{
          city:"West Elsiefort",
          state:"Virginia",
          country:"Antarctica (the territory South of 60 deg S)",
          street:"4474 Johnny Freeway"
        },
        email:"Ricky.Hilll0@hotmail.com",
        picture:"http://lorempixel.com/640/480/nature",
      };
      const userService = UserService;

      // @ts-ignore
      userService.saveItem(user).catch((e) => {
        expect(e.message).toEqual("Item validation failed: createdAt: Path `createdAt` is required.");
      });
      // @ts-ignore

    });
  });

  describe("fetch item", () => {
    it("should fetch a list user if record already exists", async () => {
      let user = {
        age: 99,
        gender:"female",
        name:"Gloria Boehm",
        address:{
          city:"West Elsiefort",
          state:"Virginia",
          country:"Antarctica (the territory South of 60 deg S)",
          street:"4474 Johnny Freeway"
        },
        email:"Ricky.Hilll0@hotmail.com",
        picture:"http://lorempixel.com/640/480/nature",
        createdAt: new Date(),
      };
      const userService = UserService;

      await userService.saveItem(user);

      const data = await userService.itemList(10, 1, {}, "name");
      // @ts-ignore

      expect(data.length).toBeGreaterThan(0);
    });

  });

});
