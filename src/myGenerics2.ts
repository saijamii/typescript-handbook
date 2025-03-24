function getFirstElement<ArrayType>(array: ArrayType[]) {
  return array[0];
}

const numbers = [1, 2, 3];
const firstNum = getFirstElement(numbers);

const strings = ["1", "2", "3"];
const firstString = getFirstElement(strings);

type ApiResponse<Data> = {
  data: Data;
  isError: boolean;
};

type UserResponse = ApiResponse<{
  name: string;
  age: number;
}>;

type BlogResponse = ApiResponse<{
  title: string;
  description: number;
}>;

const response: UserResponse = {
  data: { name: "kyle", age: 5 },
  isError: false,
};

const responseBlog: BlogResponse = {
  data: { title: "B1", description: 5 },
  isError: false,
};
