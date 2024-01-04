import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LoginComponent } from './Components/LoginComponent';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { NetflixRegisterComponent } from './Components/NetflixRegisterComponent';
import DatabindingComponent from './Components/DatabindingComponent';
import DatabindingObjectComponent from './Components/DatabindingObjectComponent';
import DatabindingArrayComponent from './Components/DatabindingArrayComponent';
import DatabindingFakestoreComponent from './Components/DatabindingFakestoreComponent';
import NestedIterationsComponent from './Components/NestedIterationsComponent';
import NestediterationLocalResourceComponent from './Components/NestediterationLocalResourceComponent';
import StateDemoComponent from './Components/StateDemoComponent';
import SetStatevalueComponent from './Components/SetStatevalueComponent';
import UsestatefnComponent from './Components/UsestatefnComponent';
import UsestateclsComponent from './Components/UsestateclsComponent';
import StyleBindingComponent from './Components/StyleBindingComponent';
import NasaMarsPhotosComponent from './Components/ApiItegrationDemoComponent';
import JQueryDemoComponent from './Components/ShoppingComponent/JQueryDemoComponent';
import JQueryFetchComponent from './Components/ShoppingComponent/JqueryFetchComponent';
import AxiosDemoComponent from './Components/AxiosDemoComponent';
import EventDemofnComponent from './Components/EventDemofnComponent';
import EventDemoclsComponent from './Components/EventDemoclsComponent';
import KeyDemoComponent from './Components/KeyDemoComponent';
import TouchEventComponent from './Components/TouchEventComponent';
import HookLifeCycleDemoComponent from './Components/HookLifeCycleDemoComponent';
import HookLifeCycleDemofnComponent from './Components/HookLifeCycleDemofnComponent';
import ContextDemoComponent from './Components/ContextDemoComponent';
import ContextUpdatedetailsComponent from './Components/ContextUpdatedetailsComponent';
import ReducerDemoComponent from './Components/ReducerDemoComponent';
import { CookiesProvider } from 'react-cookie';
import CookieLoginComponent from './Components/CookieLoginComponent';
import FormDemoComponent from './Components/FormDemoComponent';
import FormikDemoComponent from './Components/FormikDemoComponent';
import ValidationDemoComponent from './Components/ValidationDemoComponent';
import MultipleErrorValidationComponent from './Components/MultipleErrorValidationComponent';
import YupDemoComponent from './Components/YupDemoComponent';
import YupFormikValidationComponent from './Components/YupFormikValidationComponent';
import FormStateValidationComponent from './Components/FormStateValidationComponent';
import ShoppingIndexComponent from './Shopping/ShoppingIndexComponent';
import FetchDemoComponent from './Components/ShoppingComponent/FetchDemoComponent.js';
import ApiIntegrationComponent from './Components/ShoppingComponent/FetchDemoComponent.js';
import ApiItegrationDemoComponent from './Components/ApiItegrationDemoComponent';
import IndexComponent from './MyComponents/React Router/IndexComponent';
import HookDemoComponent from './MyComponents/HookDemoComponent';
import UsestateDemoComponent from './MyComponents/UsestateDemoComponent';
import UseeffectComponent from './MyComponents/UseeffectComponent';
import FormsComponent from './MyComponents/FormsComponent';
import UsecontextComponent from './MyComponents/UsecontextComponent';
import UserefComponent from './MyComponents/UserefComponent';
import UsereducerComponent from './MyComponents/UsereducerComponent';
import FilterComponent from './MyComponents/FilterComponent';
import MyLoginComponent from './MyComponents/MyLoginComponent';
import  DataBinding  from './MyComponents/DataBinding';
import { OnewayDatabind } from './MyComponents/OnewayDatabind';
import { TwowayDatabinding } from './MyComponents/TwowayDatabinding';
import { NasaApi } from './MyComponents/NasaApi';
import {EventComponent} from './MyComponents/EventComponent';
import ParentComponent from './MyComponents/DataPass C to P/ParentComponent';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
     < FetchDemoComponent/>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
