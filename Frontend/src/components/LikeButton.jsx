import { useState, useEffect } from "react";
import { likePost, unlikePost, getLikeCount } from "../services/api";
import { Link, useNavigate } from "react-router-dom";

const LikeButton = ({
  postId,
  initialLikeCount = 0,
  userId,
  onLikeUpdate,
  compact = false,
}) => {
  const [likeCount, setLikeCount] = useState(initialLikeCount);
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkLikeStatus = async () => {
      if (!postId || !userId) return;
      try {
        const response = await getLikeCount(postId, userId);
        setLikeCount(response.likeCount);
        setIsLiked(response.hasLiked);
        setError(null);
      } catch (error) {
        if (error.response?.status === 404) {
          setError("Post not available");
          setLikeCount(0);
          setIsLiked(false);
        }
      }
    };

    checkLikeStatus();
  }, [postId, userId]);

  const handleToggleLike = async () => {
    if (!userId || !postId || loading) return;
    setLoading(true);
    setError(null);

    try {
      const func = isLiked ? unlikePost : likePost;
      const response = await func(postId, userId);
      if (response) {
        setIsLiked(!isLiked);
        setLikeCount(response.likeCount || 0);
        if (onLikeUpdate) {
          onLikeUpdate(response.likeCount || 0);
        }
      }
    } catch (error) {
      if (error.response?.status === 404) {
        setError("Post not available");
        setLikeCount(0);
        setIsLiked(false);
      }
    } finally {
      setLoading(false);
    }
  };

  if (error) return null;

  return (
    <Link
      onClick={handleToggleLike}
      disabled={loading || !userId}
      className={`flex items-center gap-2 px-3 py-1 text-sm font-medium transition-all rounded-lg ${
        isLiked
          ? "text-white bg-gradient-to-r from-purple-600 to-pink-600"
          : "text-gray-700 hover:bg-purple-50 border border-gray-200 hover:border-purple-300"
      }`}
    >
      <svg
        className={`w-5 h-5 transition-all duration-300 ${
          isLiked ? "text-white scale-110" : "text-purple-500"
        }`}
        fill={isLiked ? "currentColor" : "none"}
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905C11 5.42 10.41 7 9 7H7a2 2 0 00-2 2v.5"
        />
      </svg>
      {!compact && <span>{likeCount}</span>}
    </Link>
  );
};

export default LikeButton;
