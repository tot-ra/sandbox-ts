/*
Part 1

Imagine you are building a chatbot-like negotiation tool. The UI for running chats already exists, 
but you need a tool to design and visualize chat flows that the frontend would run.

Each different type of negotiation will use its own chat flow.

As an MVP, you will support only simple flows - just a linear series of text messages displayed to the user in order. 
Each text message has:
  * text (the actual displayed string)
  * color (optional CSS attribute)

First, design a data structure that stores a single chat flow, i.e a sequence of text messages.

Then implement a function that allows adding a new message to the end of an existing chat flow.


// Requirements
// 1M, utf 
*/

type ChatFlow = ChatMessage[]


export class ChatMessage {
  text: string
  color: string
  childs: ChatMessage[]
  level: number

  public constructor(text: string, color: string, level = 0) {
    this.text = text
    this.color = color
    this.childs = []
    this.level = level
  }

  public toString() {
    let s = ("\n" + " ".repeat(this.level)) + this.text
    s = s + (this.color !== "" ? `(color: "${this.color}")` : '');
    s = s + this.childs.toString()
    return s;
  }
}

const messages: ChatMessage[] = [];
export function addChat(text: string, color: string = "", level: number = 0): ChatMessage[] {
  const msg: ChatMessage = {
    text,
    color,
    level,
    childs: []
  }
  messages.push(msg)

  return messages
}

export function toString(chatFlow: ChatFlow) {
  let result = ''
  for (const msg of chatFlow) {
    result = result + msg.toString()
  }
  return result
}

export function add(node: ChatMessage, parent: ChatMessage) {
  parent.childs.push(node)
}
