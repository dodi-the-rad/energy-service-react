"use client";
import { FC } from 'react';

import s from './ServiceContent.module.scss';

const ServiceContent: FC = () => {
  return (
    <div className={s.serviceContentContainer}>
      <h2>Energy service dashboard part</h2>
      <p>This is made in NextJS 14 / React 18</p>
      <p>
        Repo:
        <a href="https://github.com/dodi-the-rad/energy-service-react">
          github.com/dodi-the-rad/energy-service-react
        </a>
      </p>
      <p>
        Standalone app:
        <a href="https://energy-service-react.vercel.app/">
          energy-service-react.vercel.app/
        </a>
      </p>
    </div>
  )
}

export default ServiceContent;