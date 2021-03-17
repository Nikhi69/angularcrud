export class Movie{
    constructor(
      public id: number,
      public  title:string,
      public boxoffice:string,
      public active:string,
      public dateoflaunch:Date,
      public genre:string,
      public hasteaser:string,
    ){
  
    }
  }