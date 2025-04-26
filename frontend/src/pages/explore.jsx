import React from "react";
import {
  FiSearch,
  FiHome,
  FiCompass,
  FiBookmark,
  FiBell,
  FiMessageSquare,
  FiUsers,
  FiVideo,
} from "react-icons/fi";

function ExplorePage() {
  // Sample posts data
  const posts = [
    {
      id: 1,
      user: {
        name: "Jane Cooper",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        skill: "Photography",
      },
      content: {
        text: "Just finished my food photography workshop! Here are some shots from today's session.",
        media: [
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        ],
        timestamp: "2 hours ago",
      },
      stats: {
        likes: 42,
        comments: 8,
        shares: 3,
      },
    },
    {
      id: 2,
      user: {
        name: "Michael Foster",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        skill: "Web Development",
      },
      content: {
        text: "Sharing my React hooks cheat sheet that helped me land my first developer job!",
        media: [
          "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        ],
        timestamp: "5 hours ago",
      },
      stats: {
        likes: 89,
        comments: 15,
        shares: 12,
      },
    },
    {
      id: 3,
      user: {
        name: "Dries Vincent",
        avatar: "https://randomuser.me/api/portraits/men/75.jpg",
        skill: "Cooking",
      },
      content: {
        text: "My sourdough starter after 7 days - finally ready to bake! Anyone want the recipe?",
        media: [
          "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        ],
        timestamp: "1 day ago",
      },
      stats: {
        likes: 124,
        comments: 27,
        shares: 8,
      },
    },
  ];

  // Suggested skills to follow
  const suggestedSkills = [
    { id: 1, name: "UI/UX Design", followers: "12.4k" },
    { id: 2, name: "Python Programming", followers: "8.7k" },
    { id: 3, name: "Gardening", followers: "5.2k" },
    { id: 4, name: "Digital Marketing", followers: "9.1k" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}

      {/* Main Content */}
      <main className="max-w-6xl mx-auto grid grid-cols-12 gap-4 pt-4">
        {/* Left Sidebar */}
        <div className="col-span-3">
          <div className="bg-white rounded-lg shadow p-4 sticky top-20">
            <div className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Profile"
                className="h-8 w-8 rounded-full"
              />
              <span className="font-medium">Your Profile</span>
            </div>
            <div className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
              <FiUsers className="h-6 w-6 text-indigo-600" />
              <span className="font-medium">Friends</span>
            </div>
            <div className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
              <FiBookmark className="h-6 w-6 text-indigo-600" />
              <span className="font-medium">Saved</span>
            </div>
            <div className="border-t border-gray-200 my-2"></div>
            <h3 className="font-semibold text-gray-500 px-2 py-1">
              Your Shortcuts
            </h3>
            <div className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
              <div className="h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-blue-600">UI</span>
              </div>
              <span>UI Design Community</span>
            </div>
            <div className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
              <div className="h-6 w-6 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-green-600">PY</span>
              </div>
              <span>Python Learners</span>
            </div>
          </div>
        </div>

        {/* Main Feed */}
        <div className="col-span-6 space-y-4">
          {/* Create Post */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center space-x-2">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Profile"
                className="h-10 w-10 rounded-full"
              />
              <button className="flex-1 text-left bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2 text-gray-500">
                What skill are you working on today?
              </button>
            </div>
            <div className="flex justify-between mt-3 pt-3 border-t border-gray-200">
              <button className="flex items-center justify-center flex-1 space-x-2 text-gray-500 hover:bg-gray-100 py-1 rounded">
                <FiVideo className="h-5 w-5 text-red-500" />
                <span>Live Video</span>
              </button>
              <button className="flex items-center justify-center flex-1 space-x-2 text-gray-500 hover:bg-gray-100 py-1 rounded">
                <svg
                  className="h-5 w-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Photo/Video</span>
              </button>
              <button className="flex items-center justify-center flex-1 space-x-2 text-gray-500 hover:bg-gray-100 py-1 rounded">
                <svg
                  className="h-5 w-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Feeling/Activity</span>
              </button>
            </div>
          </div>

          {/* Posts */}
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow">
              {/* Post Header */}
              <div className="p-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <img
                    src={post.user.avatar}
                    alt={post.user.name}
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{post.user.name}</h4>
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <span>{post.content.timestamp}</span>
                      <span>·</span>
                      <span className="text-indigo-600">{post.user.skill}</span>
                    </div>
                  </div>
                </div>
                <button className="text-gray-500 hover:bg-gray-100 p-1 rounded-full">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
              </div>

              {/* Post Content */}
              <div className="px-4 pb-2">
                <p className="mb-3">{post.content.text}</p>
                {post.content.media.length > 0 && (
                  <div
                    className={`grid gap-1 ${
                      post.content.media.length > 1 ? "grid-cols-2" : ""
                    }`}
                  >
                    {post.content.media.map((media, index) => (
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
                  <span>{post.stats.likes}</span>
                </div>
                <div>
                  <span>{post.stats.comments} comments</span>
                  <span className="mx-1">·</span>
                  <span>{post.stats.shares} shares</span>
                </div>
              </div>

              {/* Post Actions */}
              <div className="px-4 py-1 border-t border-gray-200 flex">
                <button className="flex items-center justify-center flex-1 space-x-1 text-gray-500 hover:bg-gray-100 py-2 rounded">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                  <span>Like</span>
                </button>
                <button className="flex items-center justify-center flex-1 space-x-1 text-gray-500 hover:bg-gray-100 py-2 rounded">
                  <FiMessageSquare className="h-5 w-5" />
                  <span>Comment</span>
                </button>
                <button className="flex items-center justify-center flex-1 space-x-1 text-gray-500 hover:bg-gray-100 py-2 rounded">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                  <span>Share</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="col-span-3">
          {/* Birthday */}
          <div className="bg-white rounded-lg shadow p-4 mb-4">
            <div className="flex items-center space-x-2">
              <svg
                className="h-6 w-6 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm">
                <span className="font-semibold">Alex Morgan</span> and{" "}
                <span className="font-semibold">3 others</span> have birthdays
                today.
              </span>
            </div>
          </div>

          {/* Sponsored */}
          <div className="bg-white rounded-lg shadow p-4 mb-4">
            <h3 className="font-semibold text-gray-500 mb-2">Sponsored</h3>
            <div className="space-y-3">
              <div className="cursor-pointer">
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Ad"
                  className="w-full h-auto rounded-lg"
                />
                <p className="text-sm mt-1">
                  Learn UI/UX Design - 50% off for limited time
                </p>
              </div>
              <div className="cursor-pointer">
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Ad"
                  className="w-full h-auto rounded-lg"
                />
                <p className="text-sm mt-1">
                  Master Python in 30 days - Beginner to Advanced
                </p>
              </div>
            </div>
          </div>

          {/* Suggested Skills */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-500">Suggested Skills</h3>
              <button className="text-sm text-indigo-600 hover:underline">
                See All
              </button>
            </div>
            <div className="space-y-3">
              {suggestedSkills.map((skill) => (
                <div
                  key={skill.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 bg-indigo-100 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-indigo-600">
                        {skill.name
                          .split(" ")
                          .map((w) => w[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-medium">{skill.name}</h4>
                      <p className="text-xs text-gray-500">
                        {skill.followers} followers
                      </p>
                    </div>
                  </div>
                  <button className="text-xs font-semibold text-indigo-600 hover:bg-indigo-50 px-2 py-1 rounded">
                    Follow
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ExplorePage;
