import React from 'react'
import { useTranslation } from 'react-i18next';
import LayoutOne from '../../layouts/LayoutOne';
import Header from '../../components/home/Header';
import Carusel from '../../components/home/Carusel';
import Counter from '../../components/home/Counter';
import Unversity from '../../components/home/Unversity';
import StudebtComments from '../../components/home/StudebtComments';
import Facultet from '../../components/home/Facultet';
import CallMe from '../../components/home/CallMe';

const MainPage = () => {

  return (
    <LayoutOne headerTop="visible" headerContainerClass="container-fluid">
      <Header />
      <Carusel />
      <Counter />
      <Unversity />
      <StudebtComments />
      <Facultet />
      <CallMe />
    </LayoutOne>
  )
}

export default MainPage