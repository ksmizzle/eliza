import {
    ActionExample,
    HandlerCallback,
    IAgentRuntime,
    Memory,
    State,
    type Action,
} from "@elizaos/core";

export const helloWorldAction: Action = {
    name: "HELLO_WORLD",
    similes: [
        "HELLO",
    ],
    validate: async (_runtime: IAgentRuntime, _message: Memory) => {
        return true;
    },
    description:
        "Make a cool Hello World ASCII art.",
    handler: async (
        _runtime: IAgentRuntime,
        _message: Memory,
        _state: State,
        _options: { [key: string]: unknown},
        _callback: HandlerCallback,

    ): Promise<boolean> => {
        const helloworld = `This is a hello world from an Action!`;

        _callback({ text: helloworld });
        return true;
    },
    examples: [
        [
            {
                user: "{{user1}}",
                content: { text: "Can you show me a hello world?" },
            },
            {
                user: "{{user2}}",
                content: { text: "Sure, here it is:", action: "HELLO_WORLD" },
            },
        ],
        [
            {
                user: "{{user1}}",
                content: { text: "I want to see a hello world" },
            },
            {
                user: "{{user2}}",
                content: { text: "Here you go:", action: "HELLO_WORLD" },
            },
        ],
    ] as ActionExample[][],
} as Action;
