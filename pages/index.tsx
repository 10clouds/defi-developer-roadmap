import React from 'react';
import { Box, Container, Image } from '@chakra-ui/react';
import { GlobalHeader } from '../components/global-header';
import { OpensourceBanner } from '../components/opensource-banner';
import { Footer } from '../components/footer';
import {
  getRoadmapById,
  isInteractiveRoadmap,
  RoadmapType,
} from '../lib/roadmap';
import MdRenderer from '../components/md-renderer';
import Helmet from '../components/helmet';
import { RoadmapPageHeader } from '../components/roadmap/roadmap-page-header';
import { InteractiveRoadmapRenderer } from './[roadmap]/interactive';

type RoadmapProps = {
  roadmap: RoadmapType;
};

function ImageRoadmap(props: RoadmapProps) {
  const { roadmap } = props;

  if (isInteractiveRoadmap(roadmap.id)) {
    return <InteractiveRoadmapRenderer roadmap={roadmap} />;
  }

  if (!roadmap.imageUrl) {
    return null;
  }

  return (
    <Container maxW={'900px'} position="relative">
      <Box mb="30px">
        <Image alt={roadmap.title} src={roadmap.imageUrl} />
      </Box>
    </Container>
  );
}

function TextualRoadmap(props: RoadmapProps) {
  const { roadmap } = props;
  if (!roadmap.landingPath) {
    return null;
  }

  // Remove trailing slashes
  const normalizedPath = roadmap.landingPath.replace(/^\//, '');
  const LandingContent = require(`../content/${normalizedPath}`).default;

  return (
    <Container maxW={'container.md'} position="relative">
      <MdRenderer>
        <LandingContent />
      </MdRenderer>
    </Container>
  );
}

export default function Roadmap(props: RoadmapProps) {
  const roadmap = getRoadmapById('defi')!;

  return (
    <Box bg="white" minH="100vh">
      <GlobalHeader />
      <Helmet
        title={roadmap?.seo?.title || roadmap.title}
        description={roadmap?.seo?.description || roadmap.description}
        keywords={roadmap?.seo.keywords || []}
        roadmap={roadmap}
      />
      <Box mb="60px">
        <RoadmapPageHeader roadmap={roadmap} />
        <ImageRoadmap roadmap={roadmap} />
        <TextualRoadmap roadmap={roadmap} />
      </Box>

      {/* <OpensourceBanner /> */}
      {/* <Footer /> */}
    </Box>
  );
}
