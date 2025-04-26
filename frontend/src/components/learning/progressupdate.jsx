import React from "react";

function Progressupdate() {
  return (
    <div>
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="bg-white shadow overflow-hidden sm:rounded-lg">
          <div class="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Update Learning Progress
            </h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">
              Share what you've learned or accomplished in your skill journey.
            </p>
          </div>
          <div class="px-4 py-5 sm:p-6">
            <form class="space-y-8 divide-y divide-gray-200">
              <div class="space-y-8 divide-y divide-gray-200">
                <div>
                  <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div class="sm:col-span-6">
                      <label
                        for="learning-plan"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Learning Plan
                      </label>
                      <select
                        id="learning-plan"
                        name="learning-plan"
                        class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      >
                        <option>Select a learning plan</option>
                        <option>French Macaron Mastery</option>
                        <option>Food Photography Techniques</option>
                        <option>React Web Development</option>
                      </select>
                    </div>

                    <div class="sm:col-span-6">
                      <label
                        for="milestone"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Milestone
                      </label>
                      <select
                        id="milestone"
                        name="milestone"
                        class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      >
                        <option>Select a milestone</option>
                        <option>Week 1: Understanding Ingredients</option>
                        <option>Week 2: Basic Techniques</option>
                        <option>Week 3: Troubleshooting Common Issues</option>
                      </select>
                    </div>

                    <div class="sm:col-span-6">
                      <label
                        for="progress-type"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Progress Type
                      </label>
                      <select
                        id="progress-type"
                        name="progress-type"
                        class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      >
                        <option>Completed tutorial</option>
                        <option>Learned new skill</option>
                        <option>Overcame challenge</option>
                        <option>Created project</option>
                      </select>
                    </div>

                    <div class="sm:col-span-6">
                      <label
                        for="update-title"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Title
                      </label>
                      <div class="mt-1">
                        <input
                          type="text"
                          name="update-title"
                          id="update-title"
                          class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          placeholder="e.g., 'Mastered the macaronage technique'"
                        />
                      </div>
                    </div>

                    <div class="sm:col-span-6">
                      <label
                        for="update-description"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Description
                      </label>
                      <div class="mt-1">
                        <textarea
                          id="update-description"
                          name="update-description"
                          rows="4"
                          class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                          placeholder="Describe what you learned, challenges you faced, and how you overcame them"
                        ></textarea>
                      </div>
                    </div>

                    <div class="sm:col-span-6">
                      <label class="block text-sm font-medium text-gray-700">
                        Media
                      </label>
                      <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div class="space-y-1 text-center">
                          <svg
                            class="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div class="flex text-sm text-gray-600">
                            <label
                              for="file-upload"
                              class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                            >
                              <span>Upload files</span>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                class="sr-only"
                                multiple
                              />
                            </label>
                            <p class="pl-1">or drag and drop</p>
                          </div>
                          <p class="text-xs text-gray-500">
                            PNG, JPG, GIF, MP4 up to 10MB (max 3 files)
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="sm:col-span-6">
                      <fieldset>
                        <legend class="text-sm font-medium text-gray-700">
                          Difficulty Level
                        </legend>
                        <div class="mt-4 space-y-4">
                          <div class="flex items-center">
                            <input
                              id="difficulty-easy"
                              name="difficulty"
                              type="radio"
                              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            />
                            <label
                              for="difficulty-easy"
                              class="ml-3 block text-sm font-medium text-gray-700"
                            >
                              Easy
                            </label>
                          </div>
                          <div class="flex items-center">
                            <input
                              id="difficulty-medium"
                              name="difficulty"
                              type="radio"
                              checked
                              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            />
                            <label
                              for="difficulty-medium"
                              class="ml-3 block text-sm font-medium text-gray-700"
                            >
                              Medium
                            </label>
                          </div>
                          <div class="flex items-center">
                            <input
                              id="difficulty-hard"
                              name="difficulty"
                              type="radio"
                              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            />
                            <label
                              for="difficulty-hard"
                              class="ml-3 block text-sm font-medium text-gray-700"
                            >
                              Hard
                            </label>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </div>

              <div class="pt-5">
                <div class="flex justify-end">
                  <button
                    type="button"
                    class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Share Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progressupdate;
