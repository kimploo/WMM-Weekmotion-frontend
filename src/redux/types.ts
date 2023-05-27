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

export enum TagCategorySeq {
  POSITIVE = '1',
  NEGATIVE = '2',
  ETC = '3'
}

export interface tag {
  modDate: string;
  regDate: string;
  seq: string;
  tagCategory: {
    seq: TagCategorySeq;
    modDate: string;
    regDate: string;
    tagCategoryCode: string;
    tagCategoryName: string;
  };
  tagCategorySeq: TagCategorySeq;
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
