import React from "react";
import { BsTerminal } from "react-icons/bs";
import { RiLayoutMasonryFill } from "react-icons/ri";
import { HiSpeakerphone } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";

function ServicesPage({ service, setService }) {
  const services = [
    { id: 1, name: "Development", icon: BsTerminal },
    { id: 2, name: "Web Design", icon: RiLayoutMasonryFill },
    { id: 3, name: "Marketing", icon: HiSpeakerphone },
    { id: 4, name: "Other", icon: IoMdSettings },
  ];
  const serviceChoose = (serviceName) => {
    setService(serviceName);
  };
  const serve = service
  return (
    <div className="service-step">
      <div className="form-header">
        <h3 className="card-title">Our Services</h3>
        <p className="info">Please select which service you interested in</p>
      </div>
      <div className="form">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              className={`service ${service.name === serve ? "active" : ""} `}
              key={service.id}
              onClick={() => serviceChoose(service.name)}
            >
              <div className="icon-circle">
                <Icon color="#4A3AFF" size="40px" />
              </div>
              <p className="service-name">{service.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServicesPage;
