// abstract classes cant create objects on their own
// but helps to define the class who are inheriting them get a better structure

abstract class TakePhoto {
  constructor(cameraMode: string, filter: string) {}
  abstract getSepia(): void;
}

class Instagram extends TakePhoto {
  constructor(cameraMode: string, filter: string, burst: number) {
    super(cameraMode, filter);
  }
  getSepia(): void {
    console.log("Sepia");
  }
  getReelTime(): number {
    return 8;
  }
}

const sj = new Instagram("test", "none", 5);
sj.getReelTime();
