export interface ReviewCommentMainProps {
  replyClickHandler: (id: number) => void;
  commentClickHandler: VoidFunction;
  setRefetch: React.Dispatch<React.SetStateAction<VoidFunction | null>>;
}
