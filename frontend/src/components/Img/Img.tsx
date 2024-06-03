import { type FC, type ReactElement } from "react"

interface ImgProps {
  src: string
  width?: number
  height?: number
  scale?: string
}

const Img: FC<ImgProps> = ({
  src,
  width = 20,
  height = 20,
  scale = "1",
}): ReactElement => {
  return <img src={src} height={height} width={width} style={{ scale }} />
}

export default Img
