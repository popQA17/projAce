export default function handler(req, res) {
  const body = req.body

  console.log('body: ', body)


  if (!body.code) {
    return res.status(400).json({ data: 'PASSWORD_NULL' })
  }
  if (body.code !== 'projACE'){
    return res.status(200).json({ data: 'PASSWORD_WRONG' })
  }
  res.status(200).json({ data: `PASSWORD_VALID` })
}
