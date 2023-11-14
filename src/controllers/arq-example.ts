import { Controller, Post } from '@nestjs/common'

@Controller('/questions')
export class CreateQuestionController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  @Post()
  async handle() {
    return 'ok'
  }
}
