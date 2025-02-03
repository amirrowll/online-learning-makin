import { X } from 'lucide-react';

interface User {
  userName: string;
  score: string;
  courseName: string;
  commentStatus: string;
  mainPageStatus: string;
}

interface CommentsModalProps {
  user: User;
  onClose: () => void;
}

const CommentsModal = ({ user, onClose }: CommentsModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="w-full max-w-[677px] bg-white rounded-2xl shadow-lg">
        {/* Add your modal content here */}
      </div>
    </div>
  );
};

export default CommentsModal; 