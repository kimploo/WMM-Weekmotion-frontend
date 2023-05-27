export interface signUpInfo {
  id: string;
  verify_id: boolean;
  pw: string;
  verify_pw: string;
  name: string;
  tel: string;
}

export interface signInInfo {
  id: string;
  pw: string;
}

export interface tag {
  modDate: string;
  regDate: string;
  seq: string;
  tagCategory: {
    modDate: string;
    regDate: string;
    seq: string;
    tagCategoryCode: string;
    tagCategoryName: string;
  };
  tagCategorySeq: string;
  tagCode: string;
  tagName: string;
}

export interface diary {
  calendarYn: string;
  contents: string;
  modDate: string;
  regDate: string;
  seq: string;
  tags: diaryTag[];
  title: string;
  writerSeq: string;
}

export interface diaryTag {
  diarySeq: string;
  modDate: string;
  regDate: string;
  seq: string;
  tag: tag;
  tagSeq: string;
  writerSeq: number;
}
