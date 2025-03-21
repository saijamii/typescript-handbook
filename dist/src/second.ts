interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

class Story {
  createStory(): void {}
}

class Instagram implements TakePhoto {
  constructor() {}
  cameraMode: string;
  filter: string;
  burst: number;
}

class YouTube implements TakePhoto, Story {
  constructor() {}
  createStory(): void {
    throw new Error("Method not implemented.");
  }
  cameraMode: string;
  filter: string;
  burst: number;
  short: string;
}
