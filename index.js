import { HfInference } from '@huggingface/inference'

// Create your Hugging Face Token: https://huggingface.co/settings/tokens
// Set your Hugging Face Token: https://scrimba.com/dashboard#env
// Learn more: https://scrimba.com/links/env-variables
const hf = new HfInference(import.meta.env.VITE_HF_TOKEN)

// Hugging Face Inference API docs: https://huggingface.co/docs/huggingface.js/inference/README


// TEXT GENERATION

// const textToGenerate = "The definition of machine learning inference is "

// const response = await hf.textGeneration({
//     inputs: textToGenerate,
//     model: "HuggingFaceH4/zephyr-7b-beta"
// })

// console.log(response)
// console.log('Token exists:', !!import.meta.env.VITE_HF_TOKEN)


// TEXT CLASSIFICATION - SENTIMENT ANALYSIS

// const textToClassify = "I just bought a new camera. It's been awesome."

// const response = await hf.textClassification({
//     model: "SamLowe/roberta-base-go_emotions",
//     inputs: textToClassify
// })

// console.log(response[0].label)
// console.log(response)


// TEXT TRANSLATION

// const textToTranslate = "It's an exciting time to be an AI engineer"

// const textTranslationResponse = await hf.translation({
//     model: 'facebook/mbart-large-50-many-to-many-mmt',
//     inputs: textToTranslate,
//     parameters: {
//         src_lang: "en_XX",
//         tgt_lang: "es_XX"
//     }
//   })
  
//   const translation = textTranslationResponse.translation_text
//   console.log("\ntranslation:\n")
//   console.log(translation)


// TEXT TO SPEECH

const text = "It's an exciting time to be an A.I. engineer."

const response = await hf.textToSpeech({
  inputs: text,
  model: "espnet/kan-bayashi_ljspeech_vits"
})

console.log(response)

const audioElement = document.getElementById('speech')
const speechUrl = URL.createObjectURL(response)
audioElement.src = speechUrl