function cubicVolume(length, width, depth) {
  if (length * width * depth < 0) return 0;
  return length * width * depth;
}

export { cubicVolume };
