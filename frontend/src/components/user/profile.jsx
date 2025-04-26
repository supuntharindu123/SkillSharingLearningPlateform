import React from "react";
import {
  FiBook,
  FiCheckCircle,
  FiClock,
  FiAward,
  FiBarChart2,
  FiEdit,
  FiImage,
  FiVideo,
  FiMapPin,
  FiSmile,
  FiMoreHorizontal,
} from "react-icons/fi";
import { FaThumbsUp, FaComment, FaShare } from "react-icons/fa";

function CompleteProfilePage() {
  // User data
  const user = {
    name: "Alex Johnson",
    username: "@alexj",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    coverPhoto:
      "https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    bio: "Web Development Enthusiast | Learning React & Node.js",
    stats: {
      posts: 56,
      followers: "1.8k",
      following: 284,
    },
  };

  // Learning plans data
  const learningPlans = [
    {
      id: 1,
      title: "Full Stack Web Development",
      progress: 68,
      skills: ["HTML/CSS", "JavaScript", "React", "Node.js"],
      active: true,
      milestones: [
        { name: "HTML/CSS Fundamentals", completed: true },
        { name: "JavaScript Basics", completed: true },
        { name: "React Core Concepts", completed: true },
        { name: "Backend with Node.js", completed: false },
        { name: "Final Project", completed: false },
      ],
    },
  ];

  // User posts data
  const posts = [
    {
      id: 1,
      content:
        "Just completed the React fundamentals module in my Full Stack course! Here's a small component I built:",
      media: [
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      ],
      timestamp: "2 hours ago",
      likes: 24,
      comments: 5,
      shares: 2,
      isLearningPost: true,
      relatedPlan: "Full Stack Web Development",
    },
    {
      id: 2,
      content:
        "Beautiful day for coding at the park. Working on my portfolio website using what I've learned so far.",
      media: [
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      ],
      timestamp: "1 day ago",
      likes: 42,
      comments: 8,
      shares: 3,
      isLearningPost: false,
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Cover Photo */}
      <div className="h-64 w-full relative">
        <img
          src={user.coverPhoto}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <button className="absolute bottom-4 right-4 bg-white text-gray-800 px-4 py-2 rounded-md flex items-center">
          <FiEdit className="mr-2" />
          Edit Cover Photo
        </button>
      </div>

      {/* Profile Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="flex flex-col md:flex-row items-start md:items-end -mt-16 mb-6">
          <div className="relative">
            <img
              src={user.avatar}
              alt={user.name}
              className="h-32 w-32 rounded-full border-4 border-white"
            />
            <button className="absolute bottom-0 right-0 bg-indigo-600 text-white p-2 rounded-full">
              <FiEdit size={16} />
            </button>
          </div>

          <div className="md:ml-6 mt-4 md:mt-0">
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-gray-600">{user.username}</p>
            <p className="mt-2">{user.bio}</p>

            <div className="flex space-x-4 mt-3">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex border-t border-b border-gray-200 py-3 mb-6">
          <div className="text-center px-4 border-r border-gray-200">
            <div className="font-bold">{user.stats.posts}</div>
            <div className="text-gray-600 text-sm">Posts</div>
          </div>
          <div className="text-center px-4 border-r border-gray-200">
            <div className="font-bold">{user.stats.followers}</div>
            <div className="text-gray-600 text-sm">Followers</div>
          </div>
          <div className="text-center px-4">
            <div className="font-bold">{user.stats.following}</div>
            <div className="text-gray-600 text-sm">Following</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 sm:px-6 pb-6">
        {/* Left Column - About & Learning Progress */}
        <div className="lg:col-span-1 space-y-6">
          {/* About Section */}
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-semibold text-lg mb-3">About</h3>
            <div className="space-y-2">
              <p>
                <strong>Bio:</strong> {user.bio}
              </p>
              <p>
                <strong>Location:</strong> San Francisco, CA
              </p>
              <p>
                <strong>Joined:</strong> January 2022
              </p>
            </div>
          </div>

          {/* Learning Progress */}
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <FiBook className="mr-2 text-indigo-600" />
              Learning Progress
            </h3>

            {learningPlans
              .filter((plan) => plan.active)
              .map((plan) => (
                <div key={plan.id} className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold">{plan.title}</h4>
                    <span className="text-sm font-medium bg-indigo-100 text-indigo-800 px-2 py-1 rounded">
                      {plan.progress}% Complete
                    </span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: `${plan.progress}%` }}
                    ></div>
                  </div>

                  <div className="text-sm text-gray-600">
                    <p className="mb-1">Recent milestone:</p>
                    <div className="flex items-center">
                      <FiCheckCircle className="text-green-500 mr-2" />
                      <span>
                        Completed{" "}
                        {plan.milestones.filter((m) => m.completed).length} of{" "}
                        {plan.milestones.length} milestones
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Middle Column - Posts */}
        <div className="lg:col-span-2 space-y-6">
          {/* Create Post */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center">
              <img
                src={user.avatar}
                alt={user.name}
                className="h-10 w-10 rounded-full mr-3"
              />
              <button className="flex-1 text-left bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2 text-gray-500">
                Share your learning progress...
              </button>
            </div>

            <div className="flex justify-between mt-3 pt-3 border-t border-gray-200">
              <button className="flex items-center justify-center flex-1 space-x-2 text-gray-500 hover:bg-gray-100 py-1 rounded">
                <FiImage className="h-5 w-5 text-green-500" />
                <span>Photo/Video</span>
              </button>
              <button className="flex items-center justify-center flex-1 space-x-2 text-gray-500 hover:bg-gray-100 py-1 rounded">
                <FiBook className="h-5 w-5 text-blue-500" />
                <span>Learning Update</span>
              </button>
              <button className="flex items-center justify-center flex-1 space-x-2 text-gray-500 hover:bg-gray-100 py-1 rounded">
                <FiSmile className="h-5 w-5 text-yellow-500" />
                <span>Feeling</span>
              </button>
            </div>
          </div>

          {/* Posts */}
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow">
              {/* Post Header */}
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{user.name}</h4>
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <span>{post.timestamp}</span>
                      {post.isLearningPost && (
                        <>
                          <span>·</span>
                          <span className="text-indigo-600 flex items-center">
                            <FiBook className="mr-1" size={12} />
                            {post.relatedPlan}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <button className="text-gray-500 hover:bg-gray-100 p-1 rounded-full">
                  <FiMoreHorizontal className="h-5 w-5" />
                </button>
              </div>

              {/* Post Content */}
              <div className="px-4 pb-3">
                <p className="mb-3">{post.content}</p>
                {post.media.length > 0 && (
                  <div
                    className={`grid gap-1 ${
                      post.media.length > 1 ? "grid-cols-2" : ""
                    }`}
                  >
                    {post.media.map((media, index) => (
                      <img
                        key={index}
                        src={media}
                        alt=""
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Post Stats */}
              <div className="px-4 py-2 border-t border-gray-200 text-sm text-gray-500 flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <div className="flex items-center -space-x-1">
                    <div className="h-5 w-5 rounded-full bg-blue-500 border-2 border-white"></div>
                    <div className="h-5 w-5 rounded-full bg-red-500 border-2 border-white"></div>
                    <div className="h-5 w-5 rounded-full bg-yellow-500 border-2 border-white"></div>
                  </div>
                  <span>{post.likes}</span>
                </div>
                <div>
                  <span>{post.comments} comments</span>
                  <span className="mx-1">·</span>
                  <span>{post.shares} shares</span>
                </div>
              </div>

              {/* Post Actions */}
              <div className="px-4 py-1 border-t border-gray-200 flex">
                <button className="flex items-center justify-center flex-1 space-x-1 text-gray-500 hover:bg-gray-100 py-2 rounded">
                  <FaThumbsUp className="h-5 w-5" />
                  <span>Like</span>
                </button>
                <button className="flex items-center justify-center flex-1 space-x-1 text-gray-500 hover:bg-gray-100 py-2 rounded">
                  <FaComment className="h-5 w-5" />
                  <span>Comment</span>
                </button>
                <button className="flex items-center justify-center flex-1 space-x-1 text-gray-500 hover:bg-gray-100 py-2 rounded">
                  <FaShare className="h-5 w-5" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CompleteProfilePage;
