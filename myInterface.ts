interface User {
  readonly dbId?: number;
  email: string;
  id: number;
  googleId?: string;
  //   startTrail: () => string;
  startTrail(): string;
  getCoupon(couponname: string, value: number): number;
}

const sai: User = {
  email: "s@.com",
  id: 1,
  dbId: 20,
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "sai10", off: 10) => {
    return 10;
  },
};

sai.email = "sai@gmail.com";
// sai.dbId = 33;
