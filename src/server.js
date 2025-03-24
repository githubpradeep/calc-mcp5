import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
    import { z } from 'zod';

    // Create an MCP server for calculator functions
    const server = new McpServer({
      name: "Calculator",
      version: "1.0.0"
    });

    // Add addition tool
    server.tool(
      "add",
      { a: z.number(), b: z.number() },
      async ({ a, b }) => ({
        content: [{ type: "text", text: String(a + b) }]
      })
    );

    // Add subtraction tool
    server.tool(
      "subtract",
      { a: z.number(), b: z.number() },
      async ({ a, b }) => ({
        content: [{ type: "text", text: String(a - b) }]
      })
    );

    // Add multiplication tool
    server.tool(
      "multiply",
      { a: z.number(), b: z.number() },
      async ({ a, b }) => ({
        content: [{ type: "text", text: String(a * b) }]
      })
    );

    // Add division tool
    server.tool(
      "divide",
      { 
        a: z.number(), 
        b: z.number().refine(val => val !== 0, {
          message: "Cannot divide by zero"
        })
      },
      async ({ a, b }) => ({
        content: [{ type: "text", text: String(a / b) }]
      })
    );

    export { server };
