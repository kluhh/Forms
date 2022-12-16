import React from "react";
import debug from "sabio-debug";
import PropTypes from "prop-types";

const _logger = debug.extend("ContactMappedItem");

function ContactMappedItem({ anItem }) {
  _logger("Logger is working", anItem);

  return (
    <section className="py-5 bg-light-lighten border-top border-bottom border-light">
      <div className="mb-4 text-muted">
        <div className="display-4 text-primary text-center">{anItem.icon}</div>
        <div className="mt-4">
          <h3 className="fw-bold text-center">{anItem.title}</h3>
          <p className="fs-4 text-center">{anItem.description}</p>
        </div>
      </div>
    </section>
  );
}

ContactMappedItem.propTypes = {
  anItem: PropTypes.shape({
    id: PropTypes.number,
    icon: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default ContactMappedItem;
