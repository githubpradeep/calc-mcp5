import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
    import { z } from 'zod';

    // Create an MCP server for calculator functions
    const server = new McpServer({
      name: "Calculator",
      version: "1.0.0",
      description: "A simple calculator MCP server with basic arithmetic operations"
    });

    // Add addition tool
    server.tool(
      "add",
      { 
        a: z.number().describe("First number to add"), 
        b: z.number().describe("Second number to add") 
      },
      async ({ a, b }) => ({
        content: [{ type: "text", text: String(a + b) }]
      }),
      { description: "Add two numbers together" }
    );

    // Add subtraction tool
    server.tool(
      "subtract",
      { 
        a: z.number().describe("Number to subtract from"), 
        b: z.number().describe("Number to subtract") 
      },
      async ({ a, b }) => ({
        content: [{ type: "text", text: String(a - b) }]
      }),
      { description: "Subtract one number from another" }
    );

    // Add multiplication tool
    server.tool(
      "multiply",
      { 
        a: z.number().describe("First number to multiply"), 
        b: z.number().describe("Second number to multiply") 
      },
      async ({ a, b }) => ({
        content: [{ type: "text", text: String(a * b) }]
      }),
      { description: "Multiply two numbers together" }
    );

    // Add division tool
    server.tool(
      "divide",
      { 
        a: z.number().describe("Dividend (number to be divided)"), 
        b: z.number().refine(val => val !== 0, {
          message: "Cannot divide by zero"
        }).describe("Divisor (number to divide by)")
      },
      async ({ a, b }) => ({
        content: [{ type: "text", text: String(a / b) }]
      }),
      { description: "Divide one number by another" }
    );

    export { server };
