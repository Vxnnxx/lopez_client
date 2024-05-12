<template>
    <div v-if="$route.path === '/about'">
      <h1 class="px-4 py-2 text-white text-3xl font-black">About</h1>
    </div>
    <div v-else-if="$route.path === '/contactspage'">
      <h1 class="px-4 py-2 text-white text-3xl font-black">Contacts</h1>
    </div>
    <div v-else-if="$route.path === '/services'">
      <h1 class="px-4 py-2 text-white text-3xl font-black">Services</h1>
    </div>
    <div v-else-if="$route.path === '/location'">
      <h1 class="px-4 py-2 text-white text-3xl font-black">Location</h1>
    </div>
</template>