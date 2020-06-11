import React from 'react';

export default function SmallCard({ Icon, title, slug }) {
  return (
    <a className="card-small" href={`/project/${slug}`}>
      <Icon w={15} h={16} />
      <h3>{title}</h3>
    </a>
  );
}
