<template>
  <div class="bg-white">
    <div class="relative overflow-hidden">
      <main>
        <div class="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
          <div class="mx-auto max-w-7xl lg:px-8">
            <div class="lg:grid lg:grid-cols-2 lg:gap-8">
              <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div class="lg:py-24">
                  <h1 class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span class="block">Marathon</span>
                    <span class="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-orange-400 sm:pb-5">Software</span>
                  </h1>
                  <p class="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">Personal solutions for your software project</p>
                </div>
              </div>
              <div class="mt-12 -mb-32 sm:-mb-32 lg:m-0 lg:relative">
                <div class="mx-auto max-w-md px-4 sm:max-w-xl sm:px-6 lg:max-w-none lg:px-0">
                  <!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
                  <img class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src="/bulb-illustration-orange.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature section with grid -->
        <div class="relative bg-white py-12 sm:py-20 lg:py-28">
          <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <p class="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">We're a skilled, remote software consultancy.</p>
            <!-- <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">We're a skilled, remote software consultancy.</p> -->
            
            <div class="mt-12">
              <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
                <div v-for="feature in features" :key="feature.name" class="pt-6">
                  <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div class="-mt-6">
                      <div>
                        <span class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-amber-300 to-orange-400 rounded-md shadow-lg">
                          <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">{{ feature.name }}</h3>
                      <p class="mt-5 text-base text-gray-500">
                        {{ feature.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="relative bg-gray-900">
          <div class="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
            <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100" alt="" />
            <div aria-hidden="true" class="absolute inset-0 bg-gradient-to-r from-orange-200 to-amber-200 mix-blend-multiply" />
          </div>
          <div class="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
            <div class="md:ml-auto md:w-1/2 md:pl-10">
              <p class="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">We’re here to help</p>
              <div class="mt-8">
                <div class="inline-flex rounded-md shadow">
                  <a target="_blank" href="https://ibeoqr6muim.typeform.com/to/cEH5g6hv" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                    Get in touch
                    <ExternalLinkIcon class="-mr-1 ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <!-- Footer section -->
      <footer class="bg-white">
        <div class="mx-auto max-w-md py-12 px-4 overflow-hidden sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <p class="text-center text-base text-gray-400">&copy; 2022 Marathon Software Limited. All rights reserved.</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import {
  CloudIcon,
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  MenuIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
  XIcon,
} from '@heroicons/vue/outline'
import {
  ExternalLinkIcon,
}  from '@heroicons/vue/solid'

const features = [
  {
    name: 'Cloud Focused',
    description: 'We develop cloud native applications for wherever your business lives',
    icon: CloudIcon,
  },
  {
    name: 'IoT Specialists',
    description: 'Experienced in IoT solutions to bring unparalelled insights',
    icon: CloudUploadIcon,
  },
  // {
  //   name: 'Simple Queues',
  //   description: 'Rerum quas incidunt deleniti quaerat suscipit mollitia. Amet repellendus ut odit dolores qui.',
  //   icon: RefreshIcon,
  // },
]

</script>
