let score: number | string = 33;

score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  userName: string;
  id: number;
};

let saijami: User | Admin = {
  name: "saijami",
  id: 555,
};

saijami = {
  userName: "sj",
  id: 111,
};

function getDbId(id: number | string) {
  console.log("Db id is", id);
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

getDbId(20);
getDbId("2055");

// Arrays

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (string | number)[] = ["1", "2", "3", 1, 2, 3];
const data4: Array<string | number> = ["1", "2", "3", 1, 2, 3];

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "window";
// seatAllotment = "crew"

export {};
