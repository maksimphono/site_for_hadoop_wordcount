import {defineConfig} from "vite"

export default defineConfig({
    build: {
        outDir: "dist",
        rollupOptions : {
            input : {
                index: "./index.html",
                numbers_as_words : "./numbers_as_words.html"
            }
        }
    },
    base : "/site_for_hadoop_wordcount/"
});