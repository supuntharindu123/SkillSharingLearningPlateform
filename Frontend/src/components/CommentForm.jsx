import { useState, useEffect } from 'react';
import { addComment, editComment } from '../services/api';
import MentionInput from './MentionInput';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const CommentForm = ({ postId, userId, onCommentAdded, commentId, initialText, isEditing, onCancelEdit }) => {
  const [text, setText] = useState(initialText || '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // Reset form when initialText changes (for editing)
  useEffect(() => {
    setText(initialText || '');
  }, [initialText]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim() || !userId || isSubmitting) return;
    
    setIsSubmitting(true);
    setError(null);

    try {
      let response;
      
      if (commentId && isEditing) {
        // Edit existing comment
        response = await editComment(commentId, userId, text);
        if (onCancelEdit) onCancelEdit();
      } else {
        // Add new comment using the correct backend endpoint
        response = await addComment(postId, userId, text);
        setText('');
      }

      if (response && response.id && onCommentAdded) {
        onCommentAdded(response);
      }
    } catch (error) {
      if (error.response?.status === 404) {
        setError('This post is no longer available');
      } else {
        setError(error.response?.data?.message || 'Failed to add comment');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    if (onCancelEdit) {
      onCancelEdit();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="flex flex-col space-y-2">
        <MentionInput
          value={text}
          onChange={setText}
          placeholder="Write a comment... (Use @ to mention users)"
          disabled={isSubmitting || !userId}
        />
        
        {error && <div className="text-red-500 text-sm">{error}</div>}
        
        <div className="flex justify-end space-x-2">
          {isEditing && (
            <Link
              type="button"
              onClick={handleCancel}
              className="px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded-md"
            >
              Cancel
            </Link>
          )}
          <Link
            type="submit"
            disabled={!text.trim() || isSubmitting || !userId}
            className={`px-3 py-1 text-sm text-white bg-blue-500 rounded-md ${
              !text.trim() || isSubmitting || !userId
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-blue-600'
            }`}
          >
            {isEditing ? 'Update' : 'Comment'}
          </Link>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
