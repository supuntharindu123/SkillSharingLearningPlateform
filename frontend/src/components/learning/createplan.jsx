import React from "react";

function Createplan() {
  return (
    <div>
      {" "}
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="bg-white shadow overflow-hidden sm:rounded-lg">
          <div class="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Create a Learning Plan
            </h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">
              Structure your learning journey with topics, resources, and
              timelines.
            </p>
          </div>
          <div class="px-4 py-5 sm:p-6">
            <form class="space-y-8 divide-y divide-gray-200">
              <div class="space-y-8 divide-y divide-gray-200">
                <div>
                  <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div class="sm:col-span-6">
                      <label
                        for="plan-title"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Plan Title
                      </label>
                      <div class="mt-1">
                        <input
                          type="text"
                          name="plan-title"
                          id="plan-title"
                          class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>

                    <div class="sm:col-span-6">
                      <label
                        for="plan-description"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Description
                      </label>
                      <div class="mt-1">
                        <textarea
                          id="plan-description"
                          name="plan-description"
                          rows="3"
                          class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                        ></textarea>
                      </div>
                      <p class="mt-2 text-sm text-gray-500">
                        Describe your learning goals and what you hope to
                        achieve.
                      </p>
                    </div>

                    <div class="sm:col-span-6">
                      <label
                        for="skill-level"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Current Skill Level
                      </label>
                      <select
                        id="skill-level"
                        name="skill-level"
                        class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      >
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                      </select>
                    </div>

                    <div class="sm:col-span-6">
                      <label class="block text-sm font-medium text-gray-700">
                        Learning Milestones
                      </label>
                      <div class="mt-1 space-y-4">
                        <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input
                              id="milestone-1"
                              name="milestone-1"
                              type="checkbox"
                              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                          </div>
                          <div class="ml-3 text-sm">
                            <label
                              for="milestone-1"
                              class="font-medium text-gray-700"
                            >
                              Understand basic concepts
                            </label>
                            <div class="mt-1">
                              <input
                                type="text"
                                name="milestone-1-resources"
                                id="milestone-1-resources"
                                placeholder="Resources (links, books, etc.)"
                                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                            <div class="mt-1 flex">
                              <input
                                type="date"
                                name="milestone-1-start"
                                id="milestone-1-start"
                                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 sm:text-sm border-gray-300 rounded-md mr-2"
                              />
                              <input
                                type="date"
                                name="milestone-1-end"
                                id="milestone-1-end"
                                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                        </div>

                        <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input
                              id="milestone-2"
                              name="milestone-2"
                              type="checkbox"
                              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                          </div>
                          <div class="ml-3 text-sm">
                            <label
                              for="milestone-2"
                              class="font-medium text-gray-700"
                            >
                              Practice with small projects
                            </label>
                            <div class="mt-1">
                              <input
                                type="text"
                                name="milestone-2-resources"
                                id="milestone-2-resources"
                                placeholder="Resources (links, books, etc.)"
                                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                            <div class="mt-1 flex">
                              <input
                                type="date"
                                name="milestone-2-start"
                                id="milestone-2-start"
                                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 sm:text-sm border-gray-300 rounded-md mr-2"
                              />
                              <input
                                type="date"
                                name="milestone-2-end"
                                id="milestone-2-end"
                                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                        </div>

                        <button
                          type="button"
                          class="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          <svg
                            class="-ml-0.5 mr-2 h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          Add Milestone
                        </button>
                      </div>
                    </div>

                    <div class="sm:col-span-6">
                      <fieldset>
                        <legend class="text-sm font-medium text-gray-700">
                          Visibility
                        </legend>
                        <div class="mt-4 space-y-4">
                          <div class="flex items-center">
                            <input
                              id="visibility-public"
                              name="visibility"
                              type="radio"
                              checked
                              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            />
                            <label
                              for="visibility-public"
                              class="ml-3 block text-sm font-medium text-gray-700"
                            >
                              Public (visible to everyone)
                            </label>
                          </div>
                          <div class="flex items-center">
                            <input
                              id="visibility-private"
                              name="visibility"
                              type="radio"
                              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            />
                            <label
                              for="visibility-private"
                              class="ml-3 block text-sm font-medium text-gray-700"
                            >
                              Private (only visible to me)
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
                    Save Plan
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

export default Createplan;
