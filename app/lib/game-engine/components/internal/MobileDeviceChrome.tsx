import {useMeasure} from '@react-hookz/web'
import React from 'react'

export interface MobileDeviceChromeProps {
  children?: React.ReactNode
}

export function MobileDeviceChrome({children}: MobileDeviceChromeProps) {
  const [containerRect, containerRef] = useMeasure<HTMLDivElement>()
  return (
    <div ref={containerRef} className="flex h-screen w-screen flex-col">
      {containerRect &&
        (containerRect.width < MD_BREAKPOINT ? (
          children
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center p-8">
            <MobileDeviceChromeFrame rect={containerRect}>
              {children}
            </MobileDeviceChromeFrame>
          </div>
        ))}
    </div>
  )
}

const MD_BREAKPOINT = 768

// MARK: MobileDeviceChromeFrame

interface MobileDeviceChromeFrameProps {
  rect: DOMRectReadOnly
  children?: React.ReactNode
}

function MobileDeviceChromeFrame({
  rect,
  children,
}: MobileDeviceChromeFrameProps) {
  const height = rect.height - 2 * 32
  const ratio = height / CHROME_ORIGINAL_SIZE[1]
  return (
    <div
      className="relative text-base-content"
      style={{width: ratio * CHROME_ORIGINAL_SIZE[0], height}}>
      <svg
        className="z-120 pointer-events-none absolute inset-0"
        width={ratio * CHROME_ORIGINAL_SIZE[0]}
        height={height}
        viewBox="0 0 212 451"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <path
          d="M1 423.407L1.0019 423.702L1.00633 423.997L1.01457 424.295L1.0266 424.592L1.04117 424.892L1.06017 425.192L1.0817 425.494L1.10767 425.796L1.1368 426.1L1.16911 426.405L1.20584 426.71L1.24574 427.016L1.28944 427.322L1.33695 427.63L1.38825 427.938L1.44335 428.246L1.50225 428.555L1.56559 428.864L1.63209 429.174L1.70303 429.483L1.77776 429.793L1.8563 430.103L1.93864 430.414L2.0254 430.724L2.11597 431.034L2.21098 431.344L2.30978 431.654L2.41238 431.963L2.51942 432.272L2.63089 432.581L2.74553 432.888L2.86523 433.196L2.98874 433.502L3.11604 433.808L3.24778 434.112L3.38332 434.417L3.52329 434.719L3.6677 435.021L3.81527 435.322L3.96791 435.621L4.12371 435.919L4.28395 436.215L4.44862 436.51L4.6171 436.803L4.78937 437.095L4.96544 437.385L5.14595 437.673L5.33026 437.959L5.51836 438.243L5.71027 438.525L5.90598 438.805L6.10548 439.082L6.30879 439.357L6.5159 439.63L6.72681 439.9L6.94088 440.168L7.15876 440.434L7.38043 440.696L7.60527 440.956L7.83391 441.213L8.06572 441.467L8.3007 441.718L8.53884 441.966L8.78078 442.211L9.02526 442.452L9.2729 442.692L9.52371 442.927L9.77768 443.159L10.0342 443.387L10.2939 443.613L10.5561 443.834L10.8208 444.052L11.0887 444.267L11.3585 444.478L11.6309 444.685L11.9058 444.889L12.1832 445.089L12.4625 445.285L12.7443 445.477L13.0281 445.665L13.3137 445.85L13.6019 446.03L13.8913 446.207L14.1827 446.379L14.4753 446.548L14.7698 446.712L15.0662 446.872L15.3639 447.029L15.6628 447.181L15.9624 447.329L16.2639 447.473L16.5666 447.614L16.87 447.75L17.1746 447.882L17.4799 448.009L17.7865 448.133L18.093 448.252L18.4008 448.367L18.7086 448.479L19.0177 448.585L19.3262 448.689L19.6359 448.788L19.9456 448.883L20.2553 448.974L20.565 449.06L20.8747 449.143L21.1844 449.221L21.4941 449.296L21.8039 449.367L22.1136 449.434L22.422 449.497L22.7311 449.556L23.0389 449.611L23.3467 449.663L23.6532 449.71L23.9598 449.754L24.2657 449.794L24.5703 449.83L24.8744 449.863L25.1777 449.892L25.4798 449.918L25.7813 449.94L26.0815 449.958L26.3805 449.973L26.6782 449.985L26.9752 449.993L27.2703 449.998L27.5649 450H184.436L184.73 449.998L185.025 449.993L185.322 449.985L185.62 449.973L185.919 449.958L186.219 449.94L186.52 449.918L186.822 449.892L187.126 449.863L187.43 449.83L187.735 449.794L188.04 449.754L188.347 449.71L188.654 449.663L188.961 449.611L189.27 449.556L189.578 449.497L189.887 449.434L190.196 449.367L190.506 449.296L190.816 449.221L191.125 449.143L191.435 449.06L191.745 448.974L192.055 448.883L192.364 448.788L192.674 448.689L192.983 448.585L193.291 448.479L193.599 448.367L193.907 448.252L194.214 448.133L194.52 448.009L194.825 447.882L195.13 447.75L195.433 447.614L195.736 447.473L196.038 447.329L196.338 447.181L196.637 447.029L196.934 446.872L197.23 446.712L197.525 446.548L197.818 446.379L198.109 446.207L198.399 446.03L198.686 445.85L198.972 445.665L199.256 445.477L199.538 445.285L199.817 445.089L200.094 444.889L200.369 444.685L200.641 444.478L200.912 444.267L201.179 444.052L201.444 443.834L201.706 443.613L201.966 443.387L202.222 443.159L202.476 442.927L202.727 442.692L202.975 442.452L203.22 442.211L203.461 441.966L203.699 441.718L203.934 441.467L204.166 441.213L204.395 440.956L204.62 440.696L204.841 440.434L205.059 440.168L205.273 439.9L205.484 439.63L205.691 439.357L205.895 439.082L206.094 438.805L206.29 438.525L206.482 438.243L206.67 437.959L206.854 437.673L207.035 437.385L207.211 437.095L207.384 436.803L207.551 436.51L207.716 436.215L207.876 435.919L208.033 435.621L208.185 435.322L208.333 435.021L208.477 434.719L208.617 434.417L208.752 434.112L208.884 433.808L209.012 433.502L209.135 433.196L209.254 432.888L209.37 432.581L209.481 432.272L209.588 431.963L209.69 431.654L209.789 431.344L209.884 431.034L209.975 430.724L210.061 430.414L210.144 430.103L210.223 429.793L210.298 429.483L210.368 429.174L210.435 428.864L210.498 428.555L210.557 428.246L210.612 427.938L210.663 427.63L210.711 427.322L210.754 427.016L210.795 426.71L210.831 426.405L210.864 426.1L210.893 425.796L210.918 425.494L210.94 425.192L210.959 424.892L210.974 424.592L210.985 424.295L210.994 423.997L210.999 423.702L211 423.407V27.5931L210.999 27.2983L210.994 27.0028L210.985 26.7055L210.974 26.4075L210.959 26.1082L210.94 25.8077L210.918 25.5059L210.893 25.2035L210.864 24.8998L210.831 24.5954L210.795 24.2905L210.754 23.9842L210.711 23.6774L210.663 23.3705L210.612 23.0624L210.557 22.7542L210.498 22.4448L210.435 22.136L210.368 21.826L210.298 21.516L210.223 21.2059L210.144 20.8959L210.061 20.5858L209.975 20.2758L209.884 19.9657L209.789 19.6557L209.69 19.3457L209.588 19.0369L209.481 18.7275L209.37 18.4194L209.254 18.1112L209.135 17.8043L209.012 17.4975L208.884 17.1919L208.752 16.8869L208.617 16.5832L208.477 16.2801L208.333 15.9783L208.185 15.6784L208.033 15.3792L207.876 15.0812L207.716 14.7845L207.551 14.4896L207.384 14.1967L207.211 13.9051L207.035 13.6153L206.854 13.3268L206.67 13.0409L206.482 12.7568L206.29 12.4747L206.094 12.1951L205.895 11.9174L205.691 11.6422L205.484 11.3696L205.273 11.0995L205.059 10.8313L204.841 10.5662L204.62 10.3038L204.395 10.0438L204.166 9.78703L203.934 9.53278L203.699 9.2817L203.461 9.0338L203.22 8.78906L202.975 8.54686L202.727 8.30847L202.476 8.07324L202.222 7.84119L201.966 7.6123L201.706 7.38722L201.444 7.16531L201.179 6.9472L200.912 6.7329L200.641 6.52177L200.369 6.31444L200.094 6.11092L199.817 5.9112L199.538 5.71528L199.256 5.52317L198.972 5.33487L198.686 5.15036L198.399 4.96966L198.109 4.7934L197.818 4.62095L197.525 4.45229L197.23 4.28745L196.934 4.12704L196.637 3.97107L196.338 3.81826L196.038 3.67054L195.736 3.52598L195.433 3.38586L195.13 3.25017L194.825 3.11829L194.52 2.99085L194.214 2.86722L193.907 2.74739L193.599 2.63263L193.291 2.52104L192.983 2.41389L192.674 2.31117L192.364 2.21227L192.055 2.11716L191.745 2.02649L191.435 1.93963L191.125 1.85721L190.816 1.77859L190.506 1.70377L190.196 1.63276L189.887 1.56619L189.578 1.50279L189.27 1.44382L188.961 1.38866L188.654 1.3373L188.347 1.28975L188.04 1.246L187.735 1.20606L187.43 1.16929L187.126 1.13695L186.822 1.10778L186.52 1.08179L186.219 1.06023L185.919 1.04121L185.62 1.02663L185.322 1.01458L185.025 1.00634L184.73 1.0019L184.436 1H27.5649L27.2703 1.0019L26.9752 1.00634L26.6782 1.01458L26.3805 1.02663L26.0815 1.04121L25.7813 1.06023L25.4798 1.08179L25.1777 1.10778L24.8744 1.13695L24.5703 1.16929L24.2657 1.20606L23.9598 1.246L23.6532 1.28975L23.3467 1.3373L23.0389 1.38866L22.7311 1.44382L22.422 1.50279L22.1136 1.56619L21.8039 1.63276L21.4941 1.70377L21.1844 1.77859L20.8747 1.85721L20.565 1.93963L20.2553 2.02649L19.9456 2.11716L19.6359 2.21227L19.3262 2.31117L19.0177 2.41389L18.7086 2.52104L18.4008 2.63263L18.093 2.74739L17.7865 2.86722L17.4799 2.99085L17.1746 3.11829L16.87 3.25017L16.5666 3.38586L16.2639 3.52598L15.9624 3.67054L15.6628 3.81826L15.3639 3.97107L15.0662 4.12704L14.7698 4.28745L14.4753 4.45229L14.1827 4.62095L13.8913 4.7934L13.6019 4.96966L13.3137 5.15036L13.0281 5.33487L12.7443 5.52317L12.4625 5.71528L12.1832 5.9112L11.9058 6.11092L11.6309 6.31444L11.3585 6.52177L11.0887 6.7329L10.8208 6.9472L10.5561 7.16531L10.2939 7.38722L10.0342 7.6123L9.77768 7.84119L9.52371 8.07324L9.2729 8.30847L9.02526 8.54686L8.78078 8.78906L8.53884 9.0338L8.3007 9.2817L8.06572 9.53278L7.83391 9.78703L7.60527 10.0438L7.38043 10.3038L7.15876 10.5662L6.94088 10.8313L6.72681 11.0995L6.5159 11.3696L6.30879 11.6422L6.10548 11.9174L5.90598 12.1951L5.71027 12.4747L5.51836 12.7568L5.33026 13.0409L5.14595 13.3268L4.96544 13.6153L4.78937 13.9051L4.6171 14.1967L4.44862 14.4896L4.28395 14.7845L4.12371 15.0812L3.96791 15.3792L3.81527 15.6784L3.6677 15.9783L3.52329 16.2801L3.38332 16.5832L3.24778 16.8869L3.11604 17.1919L2.98874 17.4975L2.86523 17.8043L2.74553 18.1112L2.63089 18.4194L2.51942 18.7275L2.41238 19.0369L2.30978 19.3457L2.21098 19.6557L2.11597 19.9657L2.0254 20.2758L1.93864 20.5858L1.8563 20.8959L1.77776 21.2059L1.70303 21.516L1.63209 21.826L1.56559 22.136L1.50225 22.4448L1.44335 22.7542L1.38825 23.0624L1.33695 23.3705L1.28944 23.6774L1.24574 23.9842L1.20584 24.2905L1.16911 24.5954L1.1368 24.8998L1.10767 25.2035L1.0817 25.5059L1.06017 25.8077L1.04117 26.1082L1.0266 26.4075L1.01457 26.7055L1.00633 27.0028L1.0019 27.2983L1 27.5931V423.407Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M97.3441 23H97.3209L97.2976 22.9991L97.2744 22.9972L97.2511 22.9953L97.2285 22.9925L97.2053 22.9897L97.182 22.985L97.1594 22.9813L97.1361 22.9757L97.1135 22.9701L97.0902 22.9645L97.0676 22.957L97.045 22.9495L97.0224 22.942L96.9998 22.9336L96.9778 22.9242L96.9551 22.9149L96.9332 22.9046L96.9112 22.8934L96.8892 22.8822L96.8678 22.87L96.8458 22.8578L96.8244 22.8448L96.8031 22.8307L96.7817 22.8167L96.761 22.8017L96.7402 22.7868L96.7195 22.7709L96.6988 22.755L96.6787 22.7381L96.6586 22.7204L96.6391 22.7026L96.619 22.6839L96.6001 22.6652L96.5806 22.6455L96.5618 22.6259L96.5429 22.6063L96.5247 22.5848L96.5059 22.5632L96.4883 22.5417L96.4707 22.5193L96.4531 22.4968L96.4355 22.4735L96.4185 22.4501L96.4022 22.4267L96.3858 22.4024L96.3695 22.3771L96.3538 22.3519L96.3381 22.3266L96.323 22.3004L96.3079 22.2733L96.2935 22.2471L96.279 22.22L96.2652 22.192L96.2514 22.1639L96.2382 22.1358L96.225 22.1078L96.2124 22.0788L96.1998 22.0498L96.1879 22.0199L96.1766 21.9899L96.1653 21.96L96.154 21.9292L96.1433 21.8983L96.1332 21.8674L96.1232 21.8366L96.1137 21.8048L96.1049 21.773L96.0961 21.7412L96.0874 21.7094L96.0792 21.6766L96.0716 21.6439L96.0647 21.6112L96.0578 21.5784L96.0509 21.5457L96.0452 21.512L96.039 21.4784L96.0339 21.4447L96.0289 21.411L96.0245 21.3774L96.0201 21.3437L96.0163 21.3091L96.0132 21.2754L96.0101 21.2408L96.0075 21.2062L96.005 21.1726L96.0031 21.1379L96.0019 21.1033L96.0006 21.0687V21.0341L96 20.9995L96.0006 20.9649V20.9313L96.0019 20.8967L96.0031 20.8621L96.005 20.8274L96.0075 20.7928L96.0101 20.7592L96.0132 20.7246L96.0163 20.69L96.0201 20.6563L96.0245 20.6226L96.0289 20.589L96.0339 20.5544L96.039 20.5216L96.0452 20.488L96.0509 20.4543L96.0578 20.4216L96.0647 20.3879L96.0716 20.3552L96.0792 20.3234L96.0874 20.2906L96.0961 20.2588L96.1049 20.2261L96.1137 20.1943L96.1232 20.1634L96.1332 20.1316L96.1433 20.1008L96.154 20.0699L96.1653 20.04L96.1766 20.0101L96.1879 19.9801L96.1998 19.9502L96.2124 19.9212L96.225 19.8922L96.2382 19.8632L96.2514 19.8352L96.2652 19.8071L96.279 19.78L96.2935 19.7529L96.3079 19.7257L96.323 19.6996L96.3381 19.6734L96.3538 19.6481L96.3695 19.6229L96.3858 19.5976L96.4022 19.5733L96.4185 19.549L96.4355 19.5256L96.4531 19.5032L96.4707 19.4798L96.4883 19.4583L96.5059 19.4358L96.5247 19.4143L96.5429 19.3937L96.5618 19.3732L96.5806 19.3535L96.6001 19.3348L96.619 19.3152L96.6391 19.2974L96.6586 19.2796L96.6787 19.2619L96.6988 19.245L96.7195 19.2291L96.7402 19.2132L96.761 19.1973L96.7817 19.1833L96.8031 19.1693L96.8244 19.1552L96.8458 19.1422L96.8678 19.13L96.8892 19.1178L96.9112 19.1066L96.9332 19.0954L96.9551 19.0851L96.9778 19.0758L96.9998 19.0664L97.0224 19.058L97.045 19.0496L97.0676 19.0421L97.0902 19.0355L97.1135 19.029L97.1361 19.0234L97.1594 19.0187L97.182 19.014L97.2053 19.0103L97.2285 19.0075L97.2511 19.0047L97.2744 19.0028L97.2976 19.0009L97.3209 19H97.3441H115.656H115.679L115.702 19.0009L115.726 19.0028L115.749 19.0047L115.772 19.0075L115.795 19.0103L115.818 19.014L115.841 19.0187L115.864 19.0234L115.887 19.029L115.91 19.0355L115.932 19.0421L115.955 19.0496L115.978 19.058L116 19.0664L116.023 19.0758L116.045 19.0851L116.067 19.0954L116.089 19.1066L116.111 19.1178L116.133 19.13L116.154 19.1422L116.176 19.1552L116.197 19.1693L116.218 19.1833L116.239 19.1973L116.26 19.2132L116.28 19.2291L116.301 19.245L116.321 19.2619L116.341 19.2796L116.362 19.2974L116.381 19.3152L116.401 19.3348L116.419 19.3535L116.438 19.3732L116.457 19.3937L116.476 19.4143L116.494 19.4358L116.512 19.4583L116.53 19.4798L116.548 19.5032L116.565 19.5256L116.581 19.549L116.598 19.5733L116.615 19.5976L116.631 19.6229L116.646 19.6481L116.662 19.6734L116.677 19.6996L116.692 19.7257L116.707 19.7529L116.721 19.78L116.735 19.8071L116.749 19.8352L116.762 19.8632L116.775 19.8922L116.788 19.9212L116.8 19.9502L116.812 19.9801L116.824 20.0101L116.835 20.04L116.846 20.0699L116.857 20.1008L116.867 20.1316L116.877 20.1634L116.886 20.1943L116.896 20.2261L116.904 20.2588L116.913 20.2906L116.921 20.3234L116.928 20.3552L116.936 20.3879L116.943 20.4216L116.949 20.4543L116.955 20.488L116.961 20.5216L116.966 20.5544L116.971 20.589L116.976 20.6226L116.98 20.6563L116.984 20.69L116.987 20.7246L116.99 20.7592L116.993 20.7928L116.995 20.8274L116.997 20.8621L116.998 20.8967L116.999 20.9313L117 20.9649V20.9995V21.0341L116.999 21.0687L116.998 21.1033L116.997 21.1379L116.995 21.1726L116.993 21.2062L116.99 21.2408L116.987 21.2754L116.984 21.3091L116.98 21.3437L116.976 21.3774L116.971 21.411L116.966 21.4447L116.961 21.4784L116.955 21.512L116.949 21.5457L116.943 21.5784L116.936 21.6112L116.928 21.6439L116.921 21.6766L116.913 21.7094L116.904 21.7412L116.896 21.773L116.886 21.8048L116.877 21.8366L116.867 21.8674L116.857 21.8983L116.846 21.9292L116.835 21.96L116.824 21.9899L116.812 22.0199L116.8 22.0498L116.788 22.0788L116.775 22.1078L116.762 22.1358L116.749 22.1639L116.735 22.192L116.721 22.22L116.707 22.2471L116.692 22.2733L116.677 22.3004L116.662 22.3266L116.646 22.3519L116.631 22.3771L116.615 22.4024L116.598 22.4267L116.581 22.4501L116.565 22.4735L116.548 22.4968L116.53 22.5193L116.512 22.5417L116.494 22.5632L116.476 22.5848L116.457 22.6063L116.438 22.6259L116.419 22.6455L116.401 22.6652L116.381 22.6839L116.362 22.7026L116.341 22.7204L116.321 22.7381L116.301 22.755L116.28 22.7709L116.26 22.7868L116.239 22.8017L116.218 22.8167L116.197 22.8307L116.176 22.8448L116.154 22.8578L116.133 22.87L116.111 22.8822L116.089 22.8934L116.067 22.9046L116.045 22.9149L116.023 22.9242L116 22.9336L115.978 22.942L115.955 22.9495L115.932 22.957L115.91 22.9645L115.887 22.9701L115.864 22.9757L115.841 22.9813L115.818 22.985L115.795 22.9897L115.772 22.9925L115.749 22.9953L115.726 22.9972L115.702 22.9991L115.679 23H115.656H97.3441Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M58.9997 18H58.948L58.8957 18.0014L58.8434 18.0042L58.7911 18.007L58.7395 18.0112L58.6871 18.016L58.6355 18.0223L58.5839 18.0286L58.5323 18.0363L58.4806 18.0453L58.429 18.0544L58.3781 18.0649L58.3272 18.076L58.2762 18.0886L58.2253 18.1012L58.1751 18.1151L58.1249 18.1305L58.0753 18.1458L58.0258 18.1625L57.9763 18.18L57.9275 18.1981L57.8793 18.2169L57.8305 18.2372L57.783 18.2574L57.7356 18.279L57.6882 18.3021L57.6414 18.3251L57.5954 18.3488L57.5494 18.3739L57.504 18.3997L57.4587 18.4262L57.414 18.4534L57.3701 18.4813L57.3261 18.5099L57.2836 18.5392L57.241 18.5699L57.1985 18.6006L57.1573 18.632L57.1161 18.6648L57.0757 18.6976L57.0359 18.7318L56.9969 18.766L56.9585 18.8015L56.9208 18.8371L56.8832 18.8741L56.8462 18.9111L56.8106 18.9487L56.775 18.9871L56.7401 19.0262L56.7067 19.0659L56.6732 19.1064L56.6404 19.1468L56.6083 19.188L56.5776 19.2299L56.5469 19.2724L56.5176 19.3157L56.4883 19.3589L56.4604 19.4029L56.4325 19.4475L56.406 19.4922L56.3802 19.5375L56.3551 19.5835L56.3307 19.6296L56.3076 19.6763L56.2846 19.7238L56.263 19.7712L56.2421 19.8186L56.2218 19.8668L56.203 19.9156L56.1842 19.9644L56.1667 20.0133L56.15 20.0628L56.1339 20.1123L56.1193 20.1625L56.1046 20.2128L56.0914 20.2637L56.0795 20.3139L56.0677 20.3648L56.0572 20.4165L56.0474 20.4674L56.0384 20.519L56.0307 20.5706L56.0237 20.6223L56.0174 20.6739L56.0126 20.7262L56.0084 20.7785L56.0049 20.8301L56.0021 20.8825L56.0007 20.9348L56 20.9871V21.0387L56.0014 21.091L56.0035 21.1434L56.0063 21.1957L56.0098 21.248L56.0147 21.2996L56.0202 21.3512L56.0272 21.4036L56.0349 21.4552L56.0433 21.5068L56.0523 21.5577L56.0621 21.6093L56.0732 21.6603L56.0851 21.7112L56.0984 21.7614L56.1116 21.8123L56.1263 21.8619L56.1416 21.9121L56.1584 21.9616L56.1751 22.0112L56.1932 22.06L56.2121 22.1088L56.2323 22.157L56.2525 22.2051L56.2742 22.2525L56.2958 22.3L56.3195 22.3467L56.3432 22.3934L56.3676 22.4395L56.3934 22.4848L56.4193 22.5302L56.4465 22.5748L56.4744 22.6188L56.503 22.6627L56.5323 22.706L56.5623 22.7485L56.593 22.7904L56.6243 22.8322L56.6564 22.8734L56.6899 22.9138L56.7234 22.9536L56.7576 22.9934L56.7925 23.0317L56.828 23.0701L56.865 23.1078L56.902 23.1441L56.9397 23.1803L56.9773 23.2159L57.0164 23.2508L57.0562 23.285L57.0959 23.3185L57.1364 23.3512L57.1782 23.3833L57.2194 23.4147L57.2619 23.4454L57.3045 23.4754L57.3484 23.5047L57.3917 23.5326L57.4363 23.5605L57.481 23.587L57.5263 23.6135L57.5724 23.6386L57.6184 23.6631L57.6645 23.6868L57.7119 23.7091L57.7593 23.7314L57.8068 23.7524L57.8549 23.7726L57.903 23.7921L57.9519 23.811L58.0014 23.8291L58.0502 23.8458L58.1005 23.8619L58.15 23.8772L58.2002 23.8919L58.2511 23.9051L58.3014 23.9177L58.3523 23.9295L58.4032 23.94L58.4548 23.9498L58.5065 23.9588L58.5581 23.9672L58.6097 23.9742L58.6613 23.9812L58.7129 23.9861L58.7653 23.9909L58.8176 23.9944L58.8692 23.9972L58.9215 23.9993L58.9738 24H59.0262L59.0785 23.9993L59.1308 23.9972L59.1824 23.9944L59.2347 23.9909L59.2871 23.9861L59.3387 23.9812L59.3903 23.9742L59.4419 23.9672L59.4935 23.9588L59.5452 23.9498L59.5968 23.94L59.6477 23.9295L59.6986 23.9177L59.7489 23.9051L59.7998 23.8919L59.85 23.8772L59.8995 23.8619L59.9491 23.8458L59.9986 23.8291L60.0481 23.811L60.097 23.7921L60.1451 23.7726L60.1932 23.7524L60.2407 23.7314L60.2881 23.7091L60.3355 23.6868L60.3816 23.6631L60.4276 23.6386L60.4737 23.6135L60.519 23.587L60.5637 23.5605L60.6083 23.5326L60.6516 23.5047L60.6955 23.4754L60.7381 23.4454L60.7806 23.4147L60.8218 23.3833L60.8629 23.3512L60.9041 23.3185L60.9438 23.285L60.9836 23.2508L61.022 23.2159L61.0603 23.1803L61.098 23.1441L61.135 23.1078L61.1713 23.0701L61.2075 23.0317L61.2424 22.9934L61.2766 22.9536L61.3101 22.9138L61.3436 22.8734L61.3757 22.8322L61.4071 22.7904L61.4377 22.7485L61.4677 22.706L61.497 22.6627L61.5256 22.6188L61.5535 22.5748L61.5807 22.5302L61.6066 22.4848L61.6324 22.4395L61.6568 22.3934L61.6805 22.3467L61.7035 22.3L61.7259 22.2525L61.7475 22.2051L61.7677 22.157L61.7879 22.1088L61.8068 22.06L61.8249 22.0112L61.8417 21.9616L61.8584 21.9121L61.8737 21.8619L61.8884 21.8123L61.9016 21.7614L61.9149 21.7112L61.9268 21.6603L61.9379 21.6093L61.9477 21.5577L61.9568 21.5068L61.9651 21.4552L61.9728 21.4036L61.9798 21.3512L61.9854 21.2996L61.9902 21.248L61.9937 21.1957L61.9965 21.1434L61.9986 21.091L62 21.0387V20.9871L61.9993 20.9348L61.9979 20.8825L61.9951 20.8301L61.9916 20.7785L61.9875 20.7262L61.9826 20.6739L61.9763 20.6223L61.9693 20.5706L61.9616 20.519L61.9526 20.4674L61.9428 20.4165L61.9323 20.3648L61.9205 20.3139L61.9086 20.2637L61.8954 20.2128L61.8807 20.1625L61.8661 20.1123L61.85 20.0628L61.8333 20.0133L61.8158 19.9644L61.797 19.9156L61.7782 19.8668L61.7579 19.8186L61.737 19.7712L61.7154 19.7238L61.6924 19.6763L61.6686 19.6296L61.6449 19.5835L61.6198 19.5375L61.594 19.4922L61.5675 19.4475L61.5396 19.4029L61.5117 19.3589L61.4824 19.3157L61.4531 19.2724L61.4224 19.2299L61.3917 19.188L61.3596 19.1468L61.3268 19.1064L61.2933 19.0659L61.2598 19.0262L61.225 18.9871L61.1894 18.9487L61.1531 18.9111L61.1169 18.8741L61.0792 18.8371L61.0415 18.8015L61.0031 18.766L60.9641 18.7318L60.9243 18.6976L60.8839 18.6648L60.8427 18.632L60.8015 18.6006L60.759 18.5699L60.7164 18.5392L60.6739 18.5099L60.6299 18.4813L60.586 18.4534L60.5413 18.4262L60.496 18.3997L60.4506 18.3739L60.4046 18.3488L60.3586 18.3251L60.3118 18.3021L60.2644 18.279L60.217 18.2574L60.1688 18.2372L60.1207 18.2169L60.0725 18.1981L60.023 18.18L59.9742 18.1625L59.9247 18.1458L59.8744 18.1305L59.8249 18.1151L59.7747 18.1012L59.7238 18.0886L59.6728 18.076L59.6219 18.0649L59.571 18.0544L59.5194 18.0453L59.4677 18.0363L59.4161 18.0286L59.3645 18.0223L59.3129 18.016L59.2606 18.0112L59.2089 18.007L59.1566 18.0042L59.1043 18.0014L59.052 18H58.9997Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <mask
          id="mask0_93_565"
          style={{maskType: 'alpha'}}
          maskUnits="userSpaceOnUse"
          x="8"
          y="31"
          width="196"
          height="404">
          <path
            d="M24.3657 434L24.1955 433.999L24.0247 433.996L23.8532 433.992L23.6804 433.985L23.5077 433.976L23.3337 433.965L23.1597 433.952L22.985 433.938L22.8097 433.92L22.6338 433.901L22.4573 433.88L22.2807 433.857L22.1035 433.831L21.9257 433.804L21.7479 433.774L21.5695 433.742L21.391 433.708L21.2126 433.671L21.0335 433.632L20.8544 433.591L20.6754 433.548L20.4963 433.502L20.3166 433.454L20.1375 433.404L19.9584 433.351L19.7794 433.296L19.6003 433.238L19.4218 433.178L19.2434 433.116L19.065 433.052L18.8871 432.984L18.7093 432.915L18.5328 432.843L18.3556 432.769L18.1797 432.692L18.0044 432.613L17.8291 432.532L17.6551 432.448L17.4811 432.362L17.3084 432.273L17.1362 432.183L16.9648 432.089L16.7945 431.994L16.625 431.896L16.4566 431.795L16.289 431.693L16.1225 431.588L15.9574 431.481L15.7935 431.372L15.6302 431.26L15.4689 431.146L15.3082 431.03L15.1493 430.911L14.9918 430.791L14.8355 430.668L14.6811 430.544L14.5273 430.417L14.3761 430.288L14.2255 430.157L14.0774 430.024L13.9306 429.889L13.7857 429.753L13.6421 429.614L13.5003 429.474L13.3611 429.331L13.2232 429.187L13.0871 429.041L12.953 428.893L12.8207 428.744L12.691 428.594L12.5625 428.441L12.4366 428.287L12.3126 428.131L12.1905 427.974L12.0709 427.815L11.9532 427.656L11.838 427.494L11.7247 427.332L11.6134 427.168L11.5045 427.003L11.3982 426.836L11.2938 426.669L11.1919 426.5L11.092 426.331L10.9951 426.161L10.8996 425.989L10.8072 425.817L10.7167 425.644L10.6288 425.47L10.5433 425.296L10.4598 425.12L10.3788 424.944L10.3004 424.767L10.2244 424.591L10.1504 424.413L10.0789 424.235L10.0099 424.056L9.94347 423.877L9.87893 423.698L9.81692 423.518L9.75743 423.339L9.70048 423.159L9.64543 422.979L9.59354 422.798L9.54292 422.618L9.49547 422.438L9.4499 422.257L9.40688 422.077L9.36574 421.897L9.32714 421.718L9.29108 421.538L9.25691 421.358L9.22464 421.179L9.19489 421L9.16769 420.822L9.14237 420.643L9.11896 420.465L9.09808 420.288L9.0791 420.111L9.06201 419.935L9.04746 419.759L9.0348 419.584L9.02404 419.409L9.01519 419.235L9.00886 419.062L9.0038 418.889L9.00126 418.717L9 418.546V47.4542L9.00126 47.283L9.0038 47.1111L9.00886 46.938L9.01519 46.7649L9.02404 46.5912L9.0348 46.4162L9.04746 46.2412L9.06201 46.0655L9.0791 45.8892L9.09808 45.7123L9.11896 45.5347L9.14237 45.3572L9.16769 45.179L9.19489 45.0001L9.22464 44.8213L9.25691 44.6418L9.29108 44.4624L9.32714 44.2829L9.36574 44.1028L9.40688 43.9227L9.4499 43.7426L9.49547 43.5625L9.54292 43.3817L9.59354 43.2016L9.64543 43.0215L9.70048 42.8414L9.75743 42.6613L9.81692 42.4818L9.87893 42.3024L9.94347 42.1229L10.0099 41.9441L10.0789 41.7652L10.1504 41.587L10.2244 41.4095L10.3004 41.2325L10.3788 41.0556L10.4598 40.88L10.5433 40.7043L10.6288 40.5299L10.7167 40.3562L10.8072 40.1831L10.8996 40.0106L10.9951 39.8394L11.092 39.6689L11.1919 39.4996L11.2938 39.3309L11.3982 39.1635L11.5045 38.9974L11.6134 38.8326L11.7247 38.6684L11.838 38.5061L11.9532 38.3445L12.0709 38.1847L12.1905 38.0263L12.3126 37.8691L12.4366 37.7131L12.5625 37.5591L12.691 37.4064L12.8207 37.2555L12.953 37.1066L13.0871 36.959L13.2232 36.8126L13.3611 36.6688L13.5003 36.5262L13.6421 36.3856L13.7857 36.2475L13.9306 36.1106L14.0774 35.9757L14.2255 35.8427L14.3761 35.7116L14.5273 35.583L14.6811 35.4564L14.8355 35.3317L14.9918 35.2088L15.1493 35.0885L15.3082 34.9702L15.4689 34.8543L15.6302 34.7404L15.7935 34.6284L15.9574 34.5189L16.1225 34.412L16.289 34.307L16.4566 34.2046L16.625 34.104L16.7945 34.006L16.9648 33.9105L17.1362 33.8176L17.3084 33.7266L17.4811 33.6381L17.6551 33.5516L17.8291 33.4682L18.0044 33.3868L18.1797 33.3078L18.3556 33.2308L18.5328 33.157L18.7093 33.0851L18.8871 33.0157L19.065 32.9489L19.2434 32.884L19.4218 32.8216L19.6003 32.7618L19.7794 32.7045L19.9584 32.6491L20.1375 32.5963L20.3166 32.546L20.4963 32.4983L20.6754 32.4525L20.8544 32.4086L21.0335 32.3678L21.2126 32.329L21.391 32.2921L21.5695 32.2577L21.7479 32.2259L21.9257 32.196L22.1035 32.1687L22.2807 32.1432L22.4573 32.1196L22.6338 32.0986L22.8097 32.0796L22.985 32.0624L23.1597 32.0477L23.3337 32.035L23.5077 32.0242L23.6804 32.0153L23.8532 32.0089L24.0247 32.0038L24.1955 32.0013L24.3657 32H187.634L187.804 32.0013L187.975 32.0038L188.147 32.0089L188.32 32.0153L188.492 32.0242L188.666 32.035L188.84 32.0477L189.015 32.0624L189.19 32.0796L189.366 32.0986L189.543 32.1196L189.719 32.1432L189.897 32.1687L190.074 32.196L190.252 32.2259L190.43 32.2577L190.609 32.2921L190.787 32.329L190.966 32.3678L191.146 32.4086L191.325 32.4525L191.504 32.4983L191.683 32.546L191.862 32.5963L192.042 32.6491L192.221 32.7045L192.4 32.7618L192.578 32.8216L192.757 32.884L192.935 32.9489L193.113 33.0157L193.291 33.0851L193.468 33.157L193.644 33.2308L193.82 33.3078L193.996 33.3868L194.171 33.4682L194.346 33.5516L194.519 33.6381L194.692 33.7266L194.864 33.8176L195.035 33.9105L195.205 34.006L195.375 34.104L195.543 34.2046L195.711 34.307L195.877 34.412L196.043 34.5189L196.206 34.6284L196.37 34.7404L196.531 34.8543L196.692 34.9702L196.851 35.0885L197.008 35.2088L197.165 35.3317L197.32 35.4564L197.473 35.583L197.625 35.7116L197.775 35.8427L197.923 35.9757L198.069 36.1106L198.215 36.2475L198.358 36.3856L198.5 36.5262L198.639 36.6688L198.777 36.8126L198.913 36.959L199.047 37.1066L199.179 37.2555L199.31 37.4064L199.437 37.5591L199.563 37.7131L199.687 37.8691L199.81 38.0263L199.929 38.1847L200.047 38.3445L200.162 38.5061L200.275 38.6684L200.387 38.8326L200.495 38.9974L200.602 39.1635L200.706 39.3309L200.808 39.4996L200.908 39.6689L201.005 39.8394L201.1 40.0106L201.193 40.1831L201.283 40.3562L201.371 40.5299L201.457 40.7043L201.54 40.88L201.621 41.0556L201.7 41.2325L201.776 41.4095L201.85 41.587L201.921 41.7652L201.99 41.9441L202.057 42.1229L202.121 42.3024L202.183 42.4818L202.243 42.6613L202.3 42.8414L202.355 43.0215L202.407 43.2016L202.457 43.3817L202.505 43.5625L202.55 43.7426L202.594 43.9227L202.634 44.1028L202.673 44.2829L202.71 44.4624L202.744 44.6418L202.775 44.8213L202.805 45.0001L202.832 45.179L202.858 45.3572L202.881 45.5347L202.902 45.7123L202.921 45.8892L202.938 46.0655L202.953 46.2412L202.965 46.4162L202.976 46.5912L202.985 46.7649L202.992 46.938L202.996 47.1111L202.999 47.283L203 47.4542V418.546L202.999 418.717L202.996 418.889L202.992 419.062L202.985 419.235L202.976 419.409L202.965 419.584L202.953 419.759L202.938 419.935L202.921 420.111L202.902 420.288L202.881 420.465L202.858 420.643L202.832 420.822L202.805 421L202.775 421.179L202.744 421.358L202.71 421.538L202.673 421.718L202.634 421.897L202.594 422.077L202.55 422.257L202.505 422.438L202.457 422.618L202.407 422.798L202.355 422.979L202.3 423.159L202.243 423.339L202.183 423.518L202.121 423.698L202.057 423.877L201.99 424.056L201.921 424.235L201.85 424.413L201.776 424.591L201.7 424.767L201.621 424.944L201.54 425.12L201.457 425.296L201.371 425.47L201.283 425.644L201.193 425.817L201.1 425.989L201.005 426.161L200.908 426.331L200.808 426.5L200.706 426.669L200.602 426.836L200.495 427.003L200.387 427.168L200.275 427.332L200.162 427.494L200.047 427.656L199.929 427.815L199.81 427.974L199.687 428.131L199.563 428.287L199.437 428.441L199.31 428.594L199.179 428.744L199.047 428.893L198.913 429.041L198.777 429.187L198.639 429.331L198.5 429.474L198.358 429.614L198.215 429.753L198.069 429.889L197.923 430.024L197.775 430.157L197.625 430.288L197.473 430.417L197.32 430.544L197.165 430.668L197.008 430.791L196.851 430.911L196.692 431.03L196.531 431.146L196.37 431.26L196.206 431.372L196.043 431.481L195.877 431.588L195.711 431.693L195.543 431.795L195.375 431.896L195.205 431.994L195.035 432.089L194.864 432.183L194.692 432.273L194.519 432.362L194.346 432.448L194.171 432.532L193.996 432.613L193.82 432.692L193.644 432.769L193.468 432.843L193.291 432.915L193.113 432.984L192.935 433.052L192.757 433.116L192.578 433.178L192.4 433.238L192.221 433.296L192.042 433.351L191.862 433.404L191.683 433.454L191.504 433.502L191.325 433.548L191.146 433.591L190.966 433.632L190.787 433.671L190.609 433.708L190.43 433.742L190.252 433.774L190.074 433.804L189.897 433.831L189.719 433.857L189.543 433.88L189.366 433.901L189.19 433.92L189.015 433.938L188.84 433.952L188.666 433.965L188.492 433.976L188.32 433.985L188.147 433.992L187.975 433.996L187.804 433.999L187.634 434H24.3657Z"
            fill="#C4C4C4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </mask>
        <path
          d="M24.3657 434L24.1955 433.999L24.0247 433.996L23.8532 433.992L23.6804 433.985L23.5077 433.976L23.3337 433.965L23.1597 433.952L22.985 433.938L22.8097 433.92L22.6338 433.901L22.4573 433.88L22.2807 433.857L22.1035 433.831L21.9257 433.804L21.7479 433.774L21.5695 433.742L21.391 433.708L21.2126 433.671L21.0335 433.632L20.8544 433.591L20.6754 433.548L20.4963 433.502L20.3166 433.454L20.1375 433.404L19.9584 433.351L19.7794 433.295L19.6003 433.238L19.4218 433.178L19.2434 433.116L19.065 433.052L18.8871 432.984L18.7093 432.915L18.5328 432.843L18.3556 432.769L18.1797 432.692L18.0044 432.613L17.8291 432.532L17.6551 432.448L17.4811 432.362L17.3084 432.273L17.1362 432.183L16.9648 432.089L16.7945 431.994L16.625 431.896L16.4566 431.795L16.289 431.693L16.1225 431.588L15.9574 431.481L15.7935 431.372L15.6302 431.26L15.4689 431.146L15.3082 431.03L15.1493 430.911L14.9918 430.791L14.8355 430.668L14.6811 430.544L14.5273 430.417L14.3761 430.288L14.2255 430.157L14.0774 430.024L13.9306 429.889L13.7857 429.753L13.6421 429.614L13.5003 429.474L13.3611 429.331L13.2232 429.187L13.0871 429.041L12.953 428.893L12.8207 428.744L12.691 428.594L12.5625 428.441L12.4366 428.287L12.3126 428.131L12.1905 427.974L12.0709 427.815L11.9532 427.656L11.838 427.494L11.7247 427.332L11.6134 427.168L11.5045 427.003L11.3982 426.836L11.2938 426.669L11.1919 426.5L11.092 426.331L10.9951 426.161L10.8996 425.989L10.8072 425.817L10.7167 425.644L10.6288 425.47L10.5433 425.296L10.4598 425.12L10.3788 424.944L10.3004 424.767L10.2244 424.591L10.1504 424.413L10.0789 424.235L10.0099 424.056L9.94347 423.877L9.87893 423.698L9.81692 423.518L9.75743 423.339L9.70048 423.159L9.64543 422.979L9.59354 422.798L9.54292 422.618L9.49547 422.438L9.4499 422.257L9.40688 422.077L9.36574 421.897L9.32714 421.718L9.29108 421.538L9.25691 421.358L9.22464 421.179L9.19489 421L9.16769 420.822L9.14237 420.643L9.11896 420.465L9.09808 420.288L9.0791 420.111L9.06201 419.934L9.04746 419.759L9.0348 419.584L9.02404 419.409L9.01519 419.235L9.00886 419.062L9.0038 418.889L9.00126 418.717L9 418.546V47.4542L9.00126 47.283L9.0038 47.1111L9.00886 46.938L9.01519 46.7649L9.02404 46.5912L9.0348 46.4162L9.04746 46.2412L9.06201 46.0655L9.0791 45.8892L9.09808 45.7123L9.11896 45.5347L9.14237 45.3572L9.16769 45.179L9.19489 45.0001L9.22464 44.8213L9.25691 44.6418L9.29108 44.4624L9.32714 44.2829L9.36574 44.1028L9.40688 43.9227L9.4499 43.7426L9.49547 43.5625L9.54292 43.3817L9.59354 43.2016L9.64543 43.0215L9.70048 42.8414L9.75743 42.6613L9.81692 42.4818L9.87893 42.3024L9.94347 42.1229L10.0099 41.9441L10.0789 41.7652L10.1504 41.587L10.2244 41.4095L10.3004 41.2325L10.3788 41.0556L10.4598 40.88L10.5433 40.7043L10.6288 40.5299L10.7167 40.3562L10.8072 40.1831L10.8996 40.0106L10.9951 39.8394L11.092 39.6689L11.1919 39.4996L11.2938 39.3309L11.3982 39.1635L11.5045 38.9974L11.6134 38.8326L11.7247 38.6684L11.838 38.5061L11.9532 38.3445L12.0709 38.1847L12.1905 38.0263L12.3126 37.8691L12.4366 37.7131L12.5625 37.5591L12.691 37.4064L12.8207 37.2555L12.953 37.1066L13.0871 36.959L13.2232 36.8126L13.3611 36.6688L13.5003 36.5262L13.6421 36.3856L13.7857 36.2475L13.9306 36.1106L14.0774 35.9757L14.2255 35.8427L14.3761 35.7116L14.5273 35.583L14.6811 35.4564L14.8355 35.3317L14.9918 35.2088L15.1493 35.0885L15.3082 34.9702L15.4689 34.8543L15.6302 34.7404L15.7935 34.6284L15.9574 34.5189L16.1225 34.412L16.289 34.307L16.4566 34.2046L16.625 34.104L16.7945 34.006L16.9648 33.9105L17.1362 33.8176L17.3084 33.7266L17.4811 33.6381L17.6551 33.5516L17.8291 33.4682L18.0044 33.3868L18.1797 33.3078L18.3556 33.2308L18.5328 33.157L18.7093 33.0851L18.8871 33.0157L19.065 32.9489L19.2434 32.884L19.4218 32.8216L19.6003 32.7618L19.7794 32.7045L19.9584 32.6491L20.1375 32.5963L20.3166 32.546L20.4963 32.4983L20.6754 32.4525L20.8544 32.4086L21.0335 32.3678L21.2126 32.329L21.391 32.2921L21.5695 32.2577L21.7479 32.2259L21.9257 32.196L22.1035 32.1687L22.2807 32.1432L22.4573 32.1196L22.6338 32.0986L22.8097 32.0796L22.985 32.0624L23.1597 32.0477L23.3337 32.035L23.5077 32.0242L23.6804 32.0153L23.8532 32.0089L24.0247 32.0038L24.1955 32.0013L24.3657 32H187.634L187.804 32.0013L187.975 32.0038L188.147 32.0089L188.32 32.0153L188.492 32.0242L188.666 32.035L188.84 32.0477L189.015 32.0624L189.19 32.0796L189.366 32.0986L189.543 32.1196L189.719 32.1432L189.897 32.1687L190.074 32.196L190.252 32.2259L190.431 32.2577L190.609 32.2921L190.787 32.329L190.966 32.3678L191.146 32.4086L191.325 32.4525L191.504 32.4983L191.683 32.546L191.862 32.5963L192.042 32.6491L192.221 32.7045L192.4 32.7618L192.578 32.8216L192.757 32.884L192.935 32.9489L193.113 33.0157L193.291 33.0851L193.468 33.157L193.644 33.2308L193.82 33.3078L193.996 33.3868L194.171 33.4682L194.346 33.5516L194.519 33.6381L194.692 33.7266L194.864 33.8176L195.035 33.9105L195.205 34.006L195.375 34.104L195.543 34.2046L195.711 34.307L195.877 34.412L196.043 34.5189L196.206 34.6284L196.37 34.7404L196.531 34.8543L196.692 34.9702L196.851 35.0885L197.008 35.2088L197.164 35.3317L197.32 35.4564L197.473 35.583L197.625 35.7116L197.775 35.8427L197.923 35.9757L198.069 36.1106L198.215 36.2475L198.358 36.3856L198.5 36.5262L198.639 36.6688L198.777 36.8126L198.913 36.959L199.047 37.1066L199.179 37.2555L199.31 37.4064L199.437 37.5591L199.563 37.7131L199.687 37.8691L199.81 38.0263L199.929 38.1847L200.047 38.3445L200.162 38.5061L200.275 38.6684L200.387 38.8326L200.495 38.9974L200.602 39.1635L200.706 39.3309L200.808 39.4996L200.908 39.6689L201.005 39.8394L201.1 40.0106L201.193 40.1831L201.283 40.3562L201.371 40.5299L201.457 40.7043L201.54 40.88L201.621 41.0556L201.7 41.2325L201.776 41.4095L201.85 41.587L201.921 41.7652L201.99 41.9441L202.057 42.1229L202.121 42.3024L202.183 42.4818L202.243 42.6613L202.3 42.8414L202.355 43.0215L202.407 43.2016L202.457 43.3817L202.505 43.5625L202.55 43.7426L202.594 43.9227L202.634 44.1028L202.673 44.2829L202.71 44.4624L202.744 44.6418L202.775 44.8213L202.805 45.0001L202.832 45.179L202.858 45.3572L202.881 45.5347L202.902 45.7123L202.921 45.8892L202.938 46.0655L202.953 46.2412L202.965 46.4162L202.976 46.5912L202.985 46.7649L202.992 46.938L202.996 47.1111L202.999 47.283L203 47.4542V418.546L202.999 418.717L202.996 418.889L202.992 419.062L202.985 419.235L202.976 419.409L202.965 419.584L202.953 419.759L202.938 419.934L202.921 420.111L202.902 420.288L202.881 420.465L202.858 420.643L202.832 420.822L202.805 421L202.775 421.179L202.744 421.358L202.71 421.538L202.673 421.718L202.634 421.897L202.594 422.077L202.55 422.257L202.505 422.438L202.457 422.618L202.407 422.798L202.355 422.979L202.3 423.159L202.243 423.339L202.183 423.518L202.121 423.698L202.057 423.877L201.99 424.056L201.921 424.235L201.85 424.413L201.776 424.591L201.7 424.767L201.621 424.944L201.54 425.12L201.457 425.296L201.371 425.47L201.283 425.644L201.193 425.817L201.1 425.989L201.005 426.161L200.908 426.331L200.808 426.5L200.706 426.669L200.602 426.836L200.495 427.003L200.387 427.168L200.275 427.332L200.162 427.494L200.047 427.656L199.929 427.815L199.81 427.974L199.687 428.131L199.563 428.287L199.437 428.441L199.31 428.594L199.179 428.744L199.047 428.893L198.913 429.041L198.777 429.187L198.639 429.331L198.5 429.474L198.358 429.614L198.215 429.753L198.069 429.889L197.923 430.024L197.775 430.157L197.625 430.288L197.473 430.417L197.32 430.544L197.164 430.668L197.008 430.791L196.851 430.911L196.692 431.03L196.531 431.146L196.37 431.26L196.206 431.372L196.043 431.481L195.877 431.588L195.711 431.693L195.543 431.795L195.375 431.896L195.205 431.994L195.035 432.089L194.864 432.183L194.692 432.273L194.519 432.362L194.346 432.448L194.171 432.532L193.996 432.613L193.82 432.692L193.644 432.769L193.468 432.843L193.291 432.915L193.113 432.984L192.935 433.052L192.757 433.116L192.578 433.178L192.4 433.238L192.221 433.295L192.042 433.351L191.862 433.404L191.683 433.454L191.504 433.502L191.325 433.548L191.146 433.591L190.966 433.632L190.787 433.671L190.609 433.708L190.431 433.742L190.252 433.774L190.074 433.804L189.897 433.831L189.719 433.857L189.543 433.88L189.366 433.901L189.19 433.92L189.015 433.938L188.84 433.952L188.666 433.965L188.492 433.976L188.32 433.985L188.147 433.992L187.975 433.996L187.804 433.999L187.634 434H24.3657Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div
        className="absolute flex flex-col overflow-hidden bg-base-100"
        style={{
          top: ratio * 32,
          right: ratio * 9,
          bottom: ratio * 17,
          left: ratio * 9,
          borderRadius: ratio * 16,
        }}>
        {children}
      </div>
    </div>
  )
}

const CHROME_ORIGINAL_SIZE = [212, 451]
