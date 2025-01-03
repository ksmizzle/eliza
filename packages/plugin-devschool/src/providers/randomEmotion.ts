import { IAgentRuntime, Memory, Provider, State } from "@elizaos/core";

const randomEmotionProvider: Provider = {
    get: async (_runtime: IAgentRuntime, _message: Memory, _state?: State) => {
        const emotions = {
            happy: `${_runtime.character.name} is feeling or showing pleasure or contentment`,
            sad: `${_runtime.character.name} is feeling or showing sorrow; unhappy`,
            angry: `${_runtime.character.name} is feeling or showing strong annoyance, displeasure, or hostility`,
            surprised: `${_runtime.character.name} is feeling or showing surprise because something unexpected happened`,
            disgusted: `${_runtime.character.name} is feeling or showing revulsion or strong disapproval`,
            scared: `${_runtime.character.name} is feeling fear or anxiety; frightened`
        };
        const emotionKeys = Object.keys(emotions);
        const randomEmotionKey = emotionKeys[Math.floor(Math.random() * emotionKeys.length)];
        const randomEmotionValue =  emotions[randomEmotionKey] ;
        return randomEmotionValue;
    },
};
export { randomEmotionProvider };
