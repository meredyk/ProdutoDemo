<script setup>
import { ref } from 'vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import ActionMessage from '@/Components/ActionMessage.vue';
import FormSection from '@/Components/FormSection.vue';
import SectionBorder from '@/Components/SectionBorder.vue';

defineProps({
  categories: {
    type: Array,
    required: true,
  }
})

const form = useForm({
  name: '',
});

const submit = () => {
  form.transform(data => ({
    ...data
  })).post(route('categories:store'), {
    onFinish: () => {
      if (form.recentlySuccessful) {
        form.name = null;
        setTimeout(() => formOpen.value = false, 1500);
      }

    },
  });
};

const formOpen = ref(false);

</script>

<template>
  <AppLayout title="Categorias">

    <template #header>
      <div class="flex">
        <div class="flex-none">
          <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            Minhas Categorias
          </h2>
        </div>

        <div class="flex-auto text-end">
          <PrimaryButton type="button" v-on:click.prevent = "formOpen = ! formOpen; form.name = null">
            Nova Categoria
          </PrimaryButton>
        </div>

      </div>
    </template>

    <div v-show="formOpen">
      <div class="max-w-7xl mx-auto py-4 sm:px-6 lg:px-8">
        <FormSection @submit.prevent="submit">
          <template #title>
            Nova Categoria
          </template>

          <template #description>
            Cadastre uma nova categoria e mantenha organizado os seus produtos.
          </template>
          <template #form>
            <!-- Name -->
            <div class="col-span-6 sm:col-span-4">
              <InputLabel for="name" value="Nome" />
              <TextInput
                id="name"
                v-model="form.name"
                type="text"
                class="mt-1 block w-full"
                required
                autocomplete="name"
              />
              <InputError :message="form.errors.name" class="mt-2" />
            </div>
          </template>

          <template #actions>
            <ActionMessage :on="form.recentlySuccessful" class="me-3">
              <p style="color: #009606">Salvado com sucesso.</p>
            </ActionMessage>

            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
              Salvar
            </PrimaryButton>
          </template>
        </FormSection>
      </div>
      <SectionBorder />
    </div>

    <div v-if="categories.length > 0" class="py-3">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-6">
          <Link v-for="category in categories" :key="category.id" :href="route('categories:show', category.id)" class="flex border-b pb-5 pt-5">
            <div class="flex-none w-auto" style="width: 30%">
              {{ category.name }}
            </div>
            <div class="flex-auto w-64 text-end">
              Total de produtos: {{ category.products }}
            </div>
          </Link>
        </div>
      </div>
    </div>

    <div v-else class="py-3">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-6 text-center">
          <p class="m-10 text-2xl">Você não possui nenhuma categoria cadastrada!</p>
        </div>
      </div>
    </div>

  </AppLayout>
</template>
