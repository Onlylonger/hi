import { Button } from '@shilong/react'
import { useForm, type SubmitHandler } from 'react-hook-form'

type Inputs = {
  example: string
  exampleRequired: string
}

export default function PlaygroundPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const handleRun: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    const requestData = {
      url: 'http://echo.apifox.com/{{url-var}}',
      // url: "http://echo.apifox.com/anything",
      querySearchParams: {
        //
        name: 'ceshi',
        nameWithVariable: `{{name-var}}-h`,
      },
      body: {
        contentType: '',
        content: '',
      },
      headers: {},
    }
    const view = {
      title: 'Joe',
      calc: () => 2 + 4,
    }

    // const output = mustache.render("{{title}} spends {{calc}}", view)
    // console.log(output)
  }

  return (
    <div className="">
      <Button variant="default">nihao</Button>
      <form onSubmit={handleSubmit(handleRun)}>
        <input
          type="text"
          defaultValue={'http://echo.apifox.com/anything'}
          className="w-full"
          {...register('example')}
        />
        {/* include validation with required or other standard HTML validation rules */}
        <input {...register('exampleRequired', { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        <button type="submit">Run</button>
      </form>
      <h1>Playground</h1>
    </div>
  )
}
