import React from "react";

function Notification() {
  return (
    <div>
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="bg-white shadow overflow-hidden sm:rounded-lg">
          <div class="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Notifications
            </h3>
          </div>
          <div class="bg-white shadow overflow-hidden sm:rounded-md">
            <ul class="divide-y divide-gray-200">
              <li>
                <a href="#" class="block hover:bg-gray-50">
                  <div class="px-4 py-4 sm:px-6">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">
                        <svg
                          class="h-8 w-8 text-indigo-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                        </svg>
                      </div>
                      <div class="ml-4 flex-1">
                        <div class="flex items-center justify-between">
                          <p class="text-sm font-medium text-indigo-600">
                            Michael Foster liked your post
                          </p>
                          <p class="text-sm text-gray-500">1h ago</p>
                        </div>
                        <p class="text-sm text-gray-500">
                          "Food Photography: Lighting Techniques"
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" class="block hover:bg-gray-50">
                  <div class="px-4 py-4 sm:px-6">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">
                        <svg
                          class="h-8 w-8 text-indigo-500"
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
                      </div>
                      <div class="ml-4 flex-1">
                        <div class="flex items-center justify-between">
                          <p class="text-sm font-medium text-indigo-600">
                            Dries Vincent commented on your post
                          </p>
                          <p class="text-sm text-gray-500">3h ago</p>
                        </div>
                        <p class="text-sm text-gray-500">
                          "What diffuser would you recommend for beginners?"
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" class="block hover:bg-gray-50">
                  <div class="px-4 py-4 sm:px-6">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">
                        <svg
                          class="h-8 w-8 text-indigo-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6z" />
                        </svg>
                      </div>
                      <div class="ml-4 flex-1">
                        <div class="flex items-center justify-between">
                          <p class="text-sm font-medium text-indigo-600">
                            Leslie Alexander started following you
                          </p>
                          <p class="text-sm text-gray-500">1d ago</p>
                        </div>
                        <p class="text-sm text-gray-500">
                          Check out their profile
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" class="block hover:bg-gray-50">
                  <div class="px-4 py-4 sm:px-6">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">
                        <svg
                          class="h-8 w-8 text-indigo-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <div class="ml-4 flex-1">
                        <div class="flex items-center justify-between">
                          <p class="text-sm font-medium text-indigo-600">
                            Your learning plan progress
                          </p>
                          <p class="text-sm text-gray-500">2d ago</p>
                        </div>
                        <p class="text-sm text-gray-500">
                          "French macaron mastery" - Week 1 completed!
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
