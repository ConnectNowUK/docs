<template>
  <div class="custom-container authorization">
    <p>
      <b class="custom-container-title"><router-link to="/api-philosophy.md#authentication">Authentication</router-link></b>:
      <slot>You need to be logged in to access this resource.</slot>
    </p>
    <p v-if="$slots['authorization']">
      <b class="custom-container-title">Authorization</b>:
      <slot name="authorization">You must be authorized to access this resource.</slot
      >
    </p>
  </div>
</template>