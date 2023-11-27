package com.example.kitchenkultures.model;

import com.fasterxml.jackson.databind.JsonDeserializer;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import org.springframework.boot.jackson.JsonComponent;

import java.io.IOException;
import java.util.Base64;

@JsonComponent
public class Base64ByteArrayDeserializer extends JsonDeserializer<byte[]> {
    @Override
    public byte[] deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {
        String base64Data = p.getValueAsString();
        return Base64.getDecoder().decode(base64Data);
    }
}
