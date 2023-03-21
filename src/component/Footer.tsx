import CardContainer from './CardContainer'
import SNSContainer from './SNSContainer'

export default function Footer() {
  return (
    <footer className="p-10 footer bg-base-200 text-base-content footer-center">
      <div className="grid grid-flow-col gap-4">
        <a
          href="https://zero-base.co.kr/"
          target="_blank"
          className="link link-hover"
        >
          제로베이스
        </a>
      </div>
      <CardContainer />
      <SNSContainer />
      <div>
        <p>Copyright © 2023 Zero Base</p>
      </div>
    </footer>
  )
}
