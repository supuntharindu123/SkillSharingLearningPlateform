import React from "react";

function Post() {
  return (
    <div>
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article class="bg-white shadow overflow-hidden sm:rounded-lg">
          <div class="px-4 py-5 sm:px-6 border-b border-gray-200">
            <div class="flex items-center">
              <div class="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden">
                <img
                  class="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                  alt=""
                />
              </div>
              <div class="ml-4">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Jane Cooper
                </h3>
                <p class="text-sm text-gray-500">Posted 3 days ago</p>
              </div>
              <div class="ml-auto">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Photography
                </span>
              </div>
            </div>
          </div>
          <div class="px-4 py-5 sm:p-6">
            <h2 class="text-xl font-bold text-gray-900 mb-4">
              Food Photography: Lighting Techniques
            </h2>

            <div class="prose max-w-none text-gray-500">
              <p>
                Today I want to share some of my favorite lighting techniques
                for food photography. Getting the lighting right can make all
                the difference in making your food look appetizing and
                professional.
              </p>

              <p>Here are three techniques I use regularly:</p>

              <ol>
                <li>
                  <strong>Window Light:</strong> Natural light from a window is
                  the most flattering for food. Position your setup near a
                  window but not in direct sunlight.
                </li>
                <li>
                  <strong>Diffused Light:</strong> Use a diffuser between your
                  light source and the food to soften harsh shadows.
                </li>
                <li>
                  <strong>Backlighting:</strong> Place your light source behind
                  the food to create depth and highlight textures.
                </li>
              </ol>

              <p>
                Check out the examples below to see these techniques in action!
              </p>
            </div>

            <div class="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
              <div class="overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt=""
                  class="w-full h-48 object-cover"
                />
              </div>
              <div class="overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt=""
                  class="w-full h-48 object-cover"
                />
              </div>
              <div class="overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt=""
                  class="w-full h-48 object-cover"
                />
              </div>
            </div>

            <div class="mt-6 flex items-center justify-between">
              <div class="flex space-x-4">
                <button
                  type="button"
                  class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  <svg
                    class="h-5 w-5 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                  42 Likes
                </button>
                <button
                  type="button"
                  class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  <svg
                    class="h-5 w-5 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  8 Comments
                </button>
              </div>
              <div>
                <button
                  type="button"
                  class="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>
            </div>
          </div>

          <div class="bg-gray-50 px-4 py-5 sm:px-6">
            <h3 class="text-lg font-medium text-gray-900 mb-4">Comments</h3>

            <div class="space-y-4">
              <div class="flex">
                <div class="flex-shrink-0 mr-3">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div>
                  <div class="bg-white p-3 rounded-lg shadow-sm">
                    <div class="flex items-center justify-between">
                      <p class="font-semibold text-sm">Michael Foster</p>
                      <p class="text-xs text-gray-500">2 days ago</p>
                    </div>
                    <p class="text-sm text-gray-700 mt-1">
                      Great tips! I've been struggling with harsh shadows in my
                      food photos. The diffuser tip was especially helpful.
                    </p>
                    <div class="mt-2 flex items-center space-x-2">
                      <button
                        type="button"
                        class="text-xs text-gray-500 hover:text-gray-700"
                      >
                        Like
                      </button>
                      <span class="text-xs text-gray-500">·</span>
                      <button
                        type="button"
                        class="text-xs text-gray-500 hover:text-gray-700"
                      >
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex">
                <div class="flex-shrink-0 mr-3">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div>
                  <div class="bg-white p-3 rounded-lg shadow-sm">
                    <div class="flex items-center justify-between">
                      <p class="font-semibold text-sm">Dries Vincent</p>
                      <p class="text-xs text-gray-500">1 day ago</p>
                    </div>
                    <p class="text-sm text-gray-700 mt-1">
                      What diffuser would you recommend for beginners? There are
                      so many options out there.
                    </p>
                    <div class="mt-2 flex items-center space-x-2">
                      <button
                        type="button"
                        class="text-xs text-gray-500 hover:text-gray-700"
                      >
                        Like
                      </button>
                      <span class="text-xs text-gray-500">·</span>
                      <button
                        type="button"
                        class="text-xs text-gray-500 hover:text-gray-700"
                      >
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-6">
              <div class="flex space-x-3">
                <div class="flex-shrink-0">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div class="min-w-0 flex-1">
                  <form action="#">
                    <div>
                      <label for="comment" class="sr-only">
                        Comment
                      </label>
                      <textarea
                        id="comment"
                        name="comment"
                        rows="3"
                        class="shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                        placeholder="Add a comment"
                      ></textarea>
                    </div>
                    <div class="mt-3 flex items-center justify-between">
                      <button
                        type="submit"
                        class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Post
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Post;
