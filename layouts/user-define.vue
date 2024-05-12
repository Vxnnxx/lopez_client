<template>
    <div class="flex justify-between items-center w-auto h-20 bg-black px-4">
      <div class="flex space-x-4">
        <div @click="navigateTo('/')" class="px-4 py-2 bg-white text-black rounded-md cursor-pointer">DIGBICK</div>
      </div>
      <Label></Label>
      <div class="flex space-x-4">
        <ContactsBtn></ContactsBtn>
        <ServicesButton></ServicesButton>
        <LocationBtn></LocationBtn>
        <Button></Button>
      </div>
    </div>
  </template>
  